import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Header from './components/Header';
import Profile from './components/Profile';
import Course from './components/Course';
import Project from './components/Project';

import projectsData from './data/projectsData';
import algorithmData from './data/algorithmData';
import coursesCompleted from './data/coursesCompleted';

export default function App() {
	const projectComponents = projectsData.map((project) => (
		<Project
			key={project.id}
			name={project.name}
			description={project.description}
			url={project.url}
		/>
	));
	const algorithmComponents = algorithmData.map((project) => (
		<Project
			key={project.id}
			name={project.name}
			description={project.description}
			url={project.url}
		/>
	));
	const coursesComponents = coursesCompleted.map((course) => (
		<Course key={course.id} name={course.name} url={course.url} />
	));
	return (
		<div className="container">
			<main className="content">
				<Header />
				<h2 id='profile'>Profile</h2>
				<Profile />
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

ReactDOM.render(<App />, document.getElementById("root"));