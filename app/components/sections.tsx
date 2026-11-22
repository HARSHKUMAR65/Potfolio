import { education, experience, industries, profile, projects, skillGroups, writing } from "../site-config";

/** Skills as a plain two-column list, the way a printed resume would show them. */
export function SkillGrid() {
  return (
    <dl className="toolbox">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <dt>{group.label}</dt>
          <dd>{group.items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  );
}

export function IndustryList() {
  const list = [...industries];
  const last = list.pop();
  return <p>Over the years that&apos;s covered {list.join(", ")} and {last}.</p>;
}

export function ExperienceList() {
  return (
    <ol className="log">
      {experience.map((job) => (
        <li key={job.company}>
          <p className="log-when">{job.current && <span className="pulse" aria-label="Current role" />}{job.period}<br /><span className="log-where">{job.location}</span></p>
          <div>
            <h3 className="log-company">{job.company}</h3>
            {job.roles.map((role) => (
              <div className="log-role" key={role.title}>
                <h4>{role.title}{role.period && <span className="mono"> {role.period}</span>}</h4>
                <ul className="ticks">{role.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            ))}
            <p className="mono">{job.stack}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ProjectGrid() {
  return (
    <ul className="domains">
      {projects.map((area) => (
        <li key={area.name}>
          <h3>{area.name}</h3>
          <p>{area.description}</p>
          {area.result && <p className="work-result"><mark>{area.result}</mark></p>}
          <p className="mono">{area.stack.join(" / ")}</p>
        </li>
      ))}
    </ul>
  );
}

export function EducationList() {
  return (
    <ul className="plain">
      {education.map((item) => <li key={item.title}><strong>{item.title}</strong><span className="mono">{item.detail}</span></li>)}
    </ul>
  );
}

export function WritingList() {
  return (
    <ul className="notes">
      {writing.map((post) => (
        <li key={post.title}>
          <h3><a href={profile.linkedinPosts} target="_blank" rel="noreferrer">{post.title}</a></h3>
          <p>{post.text}</p>
        </li>
      ))}
    </ul>
  );
}
