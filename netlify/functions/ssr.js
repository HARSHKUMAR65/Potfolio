const appPromise = import("../../dist/server/index.js");

function getRequestUrl(event) {
  const protocol = (event.headers?.["x-forwarded-proto"] || "https").split(",")[0];
  const host = event.headers?.host || "localhost";
  const query = event.rawQueryString ? `?${event.rawQueryString}` : "";
  return `${protocol}://${host}${event.path}${query}`;
}

function getRequest(event) {
  const headers = new Headers();
  Object.entries(event.headers ?? {}).forEach(([name, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => headers.append(name, item));
    } else if (value != null) {
      headers.append(name, String(value));
    }
  });

  const hasBody = event.body != null && event.body !== "";
  const body = hasBody
    ? event.isBase64Encoded
      ? Buffer.from(event.body, "base64").toString("utf8")
      : event.body
    : undefined;

  return new Request(getRequestUrl(event), {
    method: event.httpMethod || "GET",
    headers,
    body,
    redirect: "manual",
  });
}

function normalizeResponseHeaders(response) {
  const headers = {};
  response.headers.forEach((value, name) => {
    headers[name] = value;
  });
  return headers;
}

export const handler = async (event) => {
  try {
    const app = (await appPromise).default;
    const request = getRequest(event);
    const response = await app.fetch(request, {}, { waitUntil() {} });
    const body = Buffer.from(await response.arrayBuffer());

    return {
      statusCode: response.status,
      headers: normalizeResponseHeaders(response),
      body: body.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error("SSR function failed:", error);

    return {
      statusCode: 500,
      headers: { "content-type": "text/plain; charset=utf-8" },
      body: Buffer.from("Internal server error").toString("base64"),
      isBase64Encoded: true,
    };
  }
};
