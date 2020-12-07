import React from "react";
import JobCard from "../job-card/job-card.component";
import jobOpenings from "../../data";

function JobList() {
  return (
    <ul>
      {jobOpenings.map((job) => 
        <JobCard 
          key={job.id}
          new={job.new} 
          company={job.company} 
          languages={job.languages} 
          position={job.position} 
          logo={job.logo} 
          postedAt={job.postedAt} />)
}
    </ul>
  )
}
export default JobList;
