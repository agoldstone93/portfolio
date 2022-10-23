import React from "react";
import './WorkExperience.css'

export default function WorkExperience(props) {
    const descriptionElements = props.description.map(item => <li key={item}>{item}</li>)
    let index = 0;
    const technologies = props.technologies.map(item => {
        index++
        const separator = props.technologies.length === index ? '' : ', ';
        return(<span key={item}>{item}{separator}</span>)
    })
    return (
        <div>
            <h3 className='title'>{props.title}</h3>
            <p className='company'>{props.company} · {props.startDate}–{props.endDate}</p>
            {props.description.length > 0 && <p>My responsibilities and achievements:</p>}
            <ul>{descriptionElements}</ul>
            <p>Technologies used: {technologies}</p>
            
        </div>
    )
}