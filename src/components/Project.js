import React from "react";
import './Project.css'

export default function Project(props) {
	return (
		<div>
			<a className="project-item" href={props.url} target="_blank" rel="noopener noreferrer">
				<h3 className='project-header'>{props.name}</h3>
			</a>
			<p>{props.description}</p>	
		</div>
	);
}