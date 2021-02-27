import { React, useEffect, useState } from "react";
import { JOB_LIST } from "../data.js";
import JobItem from "./JobItem";

export default function JobList() {
  const [tagList, setTagList] = useState([]);
  const [jobList, setJobList] = useState(JOB_LIST);

  const handleClick = (e) => {
    const tag = e.target.value;
    const set = new Set([...tagList, tag]);
    setTagList([...set]);
  };
  const handleDelete = (e) => {
    const tag = e.target.value;
    const newTagList = tagList.filter(tagItem => tag !==tagItem);
    setTagList(newTagList);
  };

  // we use effect here as tag list's update trigers job list update
  useEffect(() => {
    const newJobList  = [];
    JOB_LIST.forEach(job => {
      const jobsTagList = job.tags;
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
      const isMatched = tagList.every(tag => jobsTagList.includes(tag));
      if(isMatched) newJobList.push(job);
    })
    setJobList(newJobList);
  }, [tagList ]) 

  return (
    <>
      {tagList.length && (
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
      {jobList.map((job) => (
        <JobItem
          {...job}
          handleClick={handleClick}
          key={job.id + job.position}
        />
      ))}
    </>
  );
}
