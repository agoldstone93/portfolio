import React from 'react';
import {createRoot} from "react-dom/client";
import './App.css';

import Header from './components/Header';
import Profile from './components/Profile';
import Course from './components/Course';
import Project from './components/Project';
import WorkExperience from './components/WorkExperience';

import projectsData from './data/projectsData';
import algorithmData from './data/algorithmData';
import coursesCompleted from './data/coursesCompleted';
import workExperienceData from './data/workExperienceData';

export default function App() {
	const projectComponents = projectsData.map((project) => (
		<Project
			key={project.id}
			name={project.name}
			description={project.description}
			url={project.url}
			tags={project.tags}
		/>
	));
	const algorithmComponents = algorithmData.map((project) => (
		<Project
			key={project.id}
			name={project.name}
			description={project.description}
			url={project.url}
			tags={project.tags}
		/>
	));

	const workExperienceComponents = workExperienceData.map(job => [
		<WorkExperience 
			key={job.id} 
			title={job.title}
			company={job.company}
			startDate={job.startDate} 
			endDate={job.endDate}
			description={job.description} />
	])

	const coursesComponents = coursesCompleted.map((course) => (
		<Course key={course.id} name={course.name} url={course.url} />
	));
	return (
		<div className="container">
			<main className="content">
				<Header />
				<h2 id='profile'>Profile</h2>
				<Profile />
				<h2>Software Development Work Experience</h2>
				{workExperienceComponents}
				<h2 id='projects'>Web Projects</h2>
				<div className="project-container">{projectComponents}</div>
				<h2>Algorithm Scripting Projects</h2>
				<div className="project-container">{algorithmComponents}</div>
				<h2 id='courses' className="section-heading">Courses Completed</h2>
				<div>{coursesComponents}</div>
			</main>
		</div>
	);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);