import * as React from "react";

export default function JobItem({ handleClick, ...job }) {
  return (
    <article key={job.id} style={{ marginBottom: "3rem", display: "flex" }}>
      <img src={job.logo} alt={`${job.company} logo`} />
      <p>{job.company} </p>
      <h2>{job.position}</h2>
      {job.featured && <p>featured</p>}
      {job.new && <p>new!</p>}
      <p>{job.postedAt}</p>
      <p>{job.contract}</p>
      <p>{job.location}</p>
      <ul style={{ listStyle: "none", padding: "0", display: "flex" }}>
        {job.tags?.map((tag) => (
          <li key={tag}>
            <button value={tag} onClick={handleClick}>
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
