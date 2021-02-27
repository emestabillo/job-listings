import { React, useEffect, useState } from "react";
import { openings } from "../data.js";
import JobItem from "./JobItem";
// import useFilter from "./useFilter";

export default function JobList() {
  // const { handleClick } = useFilter();
  const [filteredTags, setFilteredTags] = useState([]);
  console.log(filteredTags);
  const [tagList, setTagList] = useState([]);
  const [jobList, setJobList] = useState(openings);

  const handleClick = (e) => {
    const tag = e.target.value;
    const set = new Set([...tagList, tag]);
    setTagList([...set]);
    const newJobList = jobList.filter((job) => {
      const { role, level, languages = [] } = job;
      const languageSet = new Set(languages);
      let intersection = new Set([...set].filter((x) => languageSet.has(x)));
      if (set.has(role) && set.has(level)) return job;
    });
    setJobList(newJobList);
  };
  useEffect(() => {
    console.log("-------");
    const jobsIds = jobList.map((job) => job.id);
    console.log(jobsIds.join(","));
  }, [jobList]);

  const handleDelete = (e) => {
    setFilteredTags(
      filteredTags.filter((tag) => {
        return tag !== e.target.value;
      })
    );
  };

  return (
    <>
      {tagList.length > 0 && (
        <ul>
          {tagList.map((tag) => {
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
      {jobList.map((job) => {
        const { languages, role, level, tools } = job;
        const tooling = [...languages, role, level, ...tools].flat();
        return (
          <JobItem
            {...job}
            handleClick={handleClick}
            tooling={tooling}
            key={job.id + job.position}
          />
        );
      })}
    </>
  );
}
