import * as React from 'react';
import { JOB_LIST } from '../data';


export default function useJobList() {
  const [tagList, setTagList] =React.useState([]);
  const [jobList, setJobList] = React.useState(JOB_LIST);
  // we use effect here as tag list's update trigers job list update
  React.useEffect(() => {
    const newJobList  = [];
    JOB_LIST.forEach(job => {
      const jobsTagList = job.tags;
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
      const isMatched = tagList.every(tag => jobsTagList.includes(tag));
      if(isMatched) newJobList.push(job);
    })
    setJobList(newJobList);
  }, [tagList]);
  
  return {tagList, setTagList, jobList}
}