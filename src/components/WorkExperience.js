import React from "react";

export default function WorkExperience(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.company}</h4>
            <h5>{props.startDate} - {props.endDate}</h5>
            <p>{props.description}</p>
        </div>
    )
}