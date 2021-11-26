import React from "react";
import './Project.css'

export default function Project(props) {
	const tags = props.tags.map(tag => <div key={tag} className='tag'>{tag}</div>)
	return (
		<div className='project-section'>
			<a className="project-item" href={props.url} target="_blank" rel="noopener noreferrer">
				<h3>{props.name}</h3>
				<p>{props.description}</p>
			</a>
			<div className='tag-container'>{tags}</div>
		</div>
	);
}