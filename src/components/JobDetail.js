import React from "react";
import { openings } from "../data.js";

function JobDetail() {
  return (
    <>
      {openings.map((job) => {
        const {
          id,
          company,
          logo,
          featured,
          position,
          postedAt,
          location,
          contract,
          languages,
          role,
          level,
          tools,
        } = job;

        const tooling = [...languages, role, level, ...tools].flat();

        return (
          <article key={id} style={{ marginBottom: "3rem" }}>
            <img src={logo} alt={`{company} logo`} />
            <p>{company} </p>
            <h2>{position}</h2>
            {featured && <p>featured</p>}
            {job.new && <p>new!</p>}
            <p>{postedAt}</p>
            <p>{contract}</p>
            <p>{location}</p>
            <ul style={{ listStyle: "none", padding: "0" }}>
              {tooling.map((tool, index) => (
                <li key={index}>
                  <button value={tool}>{tool}</button>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </>
  );
}

export default JobDetail;
