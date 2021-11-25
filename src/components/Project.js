import React from "react";
import './Project.css'

export default function Project(props) {
	return (
		<a className="project-item" href={props.url} target="_blank" rel="noopener noreferrer">
			<h3>{props.name}</h3>
			<p>{props.description}</p>
		</a>
	);
}