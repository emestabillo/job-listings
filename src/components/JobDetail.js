import { React, useState } from "react";
import { openings } from "../data.js";
// import useFilter from "./useFilter";

function JobDetail() {
  // const { handleClick } = useFilter();
  const [filteredTags, setFilteredTags] = useState([]);
  console.log(filteredTags);

  const handleClick = (e) => {
    const buttonValue = e.target.value;
    if (!filteredTags.includes(buttonValue)) {
      setFilteredTags([...filteredTags, buttonValue]);
    }
  };

  const handleDelete = (e) => {
    setFilteredTags(
      filteredTags.filter((tag) => {
        return tag !== e.target.value;
      })
    );
  };

  return (
    <>
      {filteredTags.length > 0 && (
        <ul>
          {filteredTags.map((tag) => {
            return (
              <li key={tag + tag.index}>
                {tag}
                <button onClick={handleDelete} value={tag}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      )}
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
            <img src={logo} alt={`${company} logo`} />
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
                  <button value={tool} onClick={handleClick}>
                    {tool}
                  </button>
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
