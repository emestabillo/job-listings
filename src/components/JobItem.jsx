import * as React from "react";

export default function JobItem({ handleClick, ...job }) {
  const {
    id,
    company,
    logo,
    featured,
    position,
    postedAt,
    location,
    contract,
    tags = []
  } = job;
  return (
    <article key={id} style={{ marginBottom: "3rem", display: "flex" }}>
      <img src={logo} alt={`${company} logo`} />
      <p>{company} </p>
      <h2>{position}</h2>
      {featured && <p>featured</p>}
      {job.new && <p>new!</p>}
      <p>{postedAt}</p>
      <p>{contract}</p>
      <p>{location}</p>
      <ul style={{ listStyle: "none", padding: "0", display: "flex" }}>
        {tags.map((tool, index) => (
          <li key={index}>
            <button value={tool} onClick={handleClick}>
              {tool}
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
