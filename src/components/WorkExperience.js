import React from "react";
import './WorkExperience.css'

export default function WorkExperience(props) {
    const descriptionElements = props.description.map(item => <li>{item}</li>)
    return (
        <div>
            <h3 className='title'>{props.title}</h3>
            <p className='company'>{props.company} · {props.startDate}–{props.endDate}</p>
            {props.description.length > 0 && <p>My responsibilities and achievements:</p>}
            <ul>{descriptionElements}</ul>
        </div>
    )
}