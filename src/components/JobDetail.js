import React from 'react'
import {openings} from '../data.js'

function JobDetail(){

  return (
    <main>
      {openings.map((job) => {
          const {id, company, logo, featured, position, postedAt, location, contract, languages, role, level, tools} = job
      return (
        <article key={id}>
        <img src={logo} alt="company logo"/>
          <p>{company} </p>
      <h2>Position:{position}</h2>
      {featured ? <p>feat</p> : '' }
      {job.new ? <p>new!</p> : '' }
     <p>{postedAt}</p>
     <p>{contract}</p>
     <p>{location}</p>
    
     
        </article>
        )}
      )}
    </main>
    
  )
}

//  <ul>{tags.map((tag) => <li>{tag}</li>)}</ul>

export default JobDetail
