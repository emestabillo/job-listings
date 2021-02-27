import { React, useState } from "react";
import { openings } from "../data.js";
import JobItem from "./JobItem";
// import useFilter from "./useFilter";

export default function JobList() {
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
        const { languages, role, level, tools } = job;
        const tooling = [...languages, role, level, ...tools].flat();
        return <JobItem {...job} handleClick={handleClick} tooling={tooling} />;
      })}
    </>
  );
}
