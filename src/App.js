import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Header from './components/Header';
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
		<div class="container">
			<div class="content">
				<Header />
				<h2 class="section-heading">Web Projects</h2>
				<div class="project-container">{projectComponents}</div>
				<h2 class="section-heading">Algorithm Scripting Projects</h2>
				<div class="project-container">{algorithmComponents}</div>
				<h2 class="section-heading">Courses Completed</h2>
				<div class="course-container">{coursesComponents}</div>
			</div>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));