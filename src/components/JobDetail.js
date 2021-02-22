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
          <h2>{position}</h2>
          {featured ? <p>featured</p> : '' }
          {job.new ? <p>new!</p> : '' }
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>

          <ul className="tags">
            {languages.map((language) => <li key={id + language}>{language}</li>)}
            <li>{role}</li>
            <li>{level}</li>
            {tools.map((tool) => <li key={id + tool}>{tool}</li>)}        
          </ul>
    
     
        </article>
        )}
      )}
    </main>
    
  )
}

//  <ul>{tags.map((tag) => <li>{tag}</li>)}</ul>

export default JobDetail
