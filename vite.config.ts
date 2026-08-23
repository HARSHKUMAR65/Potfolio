import { access, cp, mkdir, rm } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import vinext from "vinext";
import { defineConfig, type Plugin } from "vite";

function sitesPlugin(): Plugin {
  let root = process.cwd();

  const fileExists = async (candidate: string): Promise<boolean> => {
    try {
      await access(candidate);
      return true;
    } catch {
      return false;
    }
  };

  return {
    name: "sites",
    apply: "build",
    configResolved(config) {
      root = config.root;
    },
    async closeBundle() {
      const outputDirectory = path.resolve(root, "dist", ".openai");
      const hostingConfig = path.resolve(root, ".openai", "hosting.json");
      const drizzleSource = path.resolve(root, "drizzle");

      await rm(outputDirectory, { recursive: true, force: true });
      await mkdir(outputDirectory, { recursive: true });

      if (await fileExists(hostingConfig)) {
        await cp(hostingConfig, path.resolve(outputDirectory, "hosting.json"));
      }

      if (await fileExists(drizzleSource)) {
        await cp(drizzleSource, path.resolve(outputDirectory, "drizzle"), {
          recursive: true,
        });
      }
    },
  };
}

const SITE_CREATOR_PLACEHOLDER_DATABASE_ID =
  "00000000-0000-4000-8000-000000000000";

const hostingConfigPath = path.resolve(process.cwd(), ".openai", "hosting.json");
const hostingConfig = existsSync(hostingConfigPath)
  ? (JSON.parse(readFileSync(hostingConfigPath, "utf8")) as {
      d1?: string;
      r2?: string;
    })
  : {};

const { d1, r2 } = hostingConfig;

// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";

const localBindingConfig = {
  main: "./worker/index.ts",
  compatibility_flags: ["nodejs_compat"],
  d1_databases: d1
    ? [
        {
          binding: d1,
          database_name: "site-creator-d1",
          database_id: SITE_CREATOR_PLACEHOLDER_DATABASE_ID,
        },
      ]
    : [],
  r2_buckets: r2
    ? [
        {
          binding: r2,
          bucket_name: "site-creator-r2",
        },
      ]
    : [],
};

export default defineConfig(async () => {
  // Keep Wrangler and Miniflare state project-local. These are non-secret tool
  // settings; application environment belongs in ignored `.env*` files.
  process.env.WRANGLER_WRITE_LOGS ??= "false";
  process.env.WRANGLER_LOG_PATH ??= ".wrangler/logs";
  process.env.MINIFLARE_REGISTRY_PATH ??= ".wrangler/registry";

  // Wrangler snapshots its log path while the Cloudflare plugin is imported.
  const { cloudflare } = await import("@cloudflare/vite-plugin");

  return {
    server: {
      host: "0.0.0.0",
      allowedHosts: ["terminal.local"],
      ...(isCodexSeatbeltSandbox
        ? { watch: { useFsEvents: false, usePolling: true } }
        : {}),
    },
    plugins: [
      vinext(),
      sitesPlugin(),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        inspectorPort: false,
        config: localBindingConfig,
      }),
    ],
  };
});
