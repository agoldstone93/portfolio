import React from "react";

export default function Course(props) {
	return (
		<p>
			<a href={props.url} target="_blank" rel="noopener noreferrer" className="course-item">
				{props.name}
			</a>
		</p>
	);
}