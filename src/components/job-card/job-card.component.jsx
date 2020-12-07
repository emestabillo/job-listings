import React from "react"

function JobCard(props) {
  const languages = props.languages.map((language) => <li>{language}</li>);
  // const logos = (logo) => { return `require(../../images/${props.logo})`}
  return (
    <div>
      <p>Company:{props.company} </p>
      <h2>Position:{props.position}</h2>
      <p style={{display: !props.new && "none"}}>NEW</p>
     <p>{props.postedAt}</p>
     <p>{props.contract}</p>
     <p>{props.location}</p>
     <ul>{languages}</ul>
     <img src={props.logo} alt="company logo"/>
    </div>
  )
}


export default JobCard;