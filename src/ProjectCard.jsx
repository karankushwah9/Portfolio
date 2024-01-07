import React from "react";
import "./ContactStyle.css";   // In contact css, project css and also About css

const ProjectCard = ({ obj}) => {
  return (
    <div style={{padding:"1%"}}>
    {/*<div className="card-body">
          <a href={obj.github} className="card-link">Github Link</a>
          <a href={obj.projectLink} className="card-link">Project link</a>
        </div> */}

  <div className="nft" style={{height:"92%"}}>
    <div className='main' style={{width:"100%"}}>
      <img className='tokenImage' src={obj.imageLink} alt="NFT" />
      <h2 style={{color:"black"}}>{obj.projectTittle}</h2>
      <p className='description'>{obj.description}</p>
      <div className='tokenInfo'>
       <button class="button-33" role="button">Check out!</button>
      </div>
      <hr/>
    </div>
  </div>

    </div>
    
  );
};

export default ProjectCard;
