import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const projectsData = [
	{
		id: 5,
		name: "Markdown Previewer",
		description:
			"I created a web app which allows a user to type in plain text. The app will convert it into markdown styled text.",
		url: "https://codepen.io/amg93/full/MWKpJME"
	},
	{
		id: 4,
		name: "Random Quote Generator",
		description:
			"This is a web app which will generate a random quote from an API. The user can click a button to generate a new quote and another button to tweet the quote and its author.",
		url: "https://codepen.io/amg93/full/NWxpNNB"
	},
	{
		id: 6,
		name: "Palindrome Checker",
		description:
			"I built a simple JavaScript program to check if a string is a palindrome.",
		url: "https://repl.it/@agoldstone93/PalindromeChecker"
	},
	{
		id: 3,
		name: "Technical Documentation Page",
		description:
			"This is a page which displays a lot of information within a technical document.",
		url: "https://codepen.io/amg93/full/KKpJzYZ"
	},
	{
		id: 2,
		name: "Product Landing Page",
		description:
			"This is an example product landing page. It contains an embedded video and information laid out clearly.",
		url: "https://codepen.io/amg93/full/abOXzQL"
	},
	{
		id: 1,
		name: "Survey Form",
		description:
			"This is a basic survey form which allows users to enter information about themselves.",
		url: "https://codepen.io/amg93/full/qBdEQNJ"
	}
];

const algorithmData = [
	{
		id: 1,
		name: "Cash Register",
		description:
			"This algorithm should take an input of the price of an item, the amount paid in cash, and return the contents of the cash register as an array following the transaction.",
		url: "https://repl.it/@agoldstone93/Cash-Register"
	},
	{
		id: 2,
		name: "Telephone Number Validator",
		description: "This JavaScript program returns a Boolean value to represent whether the input is a valid US telephone number",
		url: "https://repl.it/@agoldstone93/Telephone-Number-Validator"
	},
	{
		id: 3,
		name: "Caesars Cipher",
		description: "This program will take an enciphered input which has been Caesar shifted by 13 spaces returns upper case if given lower case input",
		url: "https://repl.it/@agoldstone93/Ceasars-Cipher"
	},
	{
		id: 4,
		name: "Roman Numeral Converter",
		description: "This will take an inputted roman numeral and output the converted decimal number.",
		url: "https://repl.it/@agoldstone93/Roman-Numeral-Converter"
	},
	{
		id: 5,
		name: "Palindrome Checker",
		description: "This program will take a string as an input and will return a Boolean value indicating whether or not it is a palindrome.",
		url: "https://repl.it/@agoldstone93/Palindrome-Checker"
	}
];

const coursesCompleted = [
	{
		id: 1,
		name: "Responsive Web Design",
		url:
			"https://www.freecodecamp.org/certification/agoldstone93/responsive-web-design"
	},
	{
		id: 2,
		name: "JavaScript Algorithms and Data Structures",
		url:
			"https://www.freecodecamp.org/certification/agoldstone93/javascript-algorithms-and-data-structures"
	}
];

function App() {
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
				<div class="intro">
					<h1>Adam Goldstone</h1>
					<p>
						I am a self taught programmer with experience using HTML, CSS, JavaScript,
						React and C.
					</p>
				</div>
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

function Project(props) {
	return (
		<a class="project-item" href={props.url} target="_blank">
			<h3>{props.name}</h3>
			<p>{props.description}</p>
		</a>
	);
}

function Course(props) {
	return (
		<p>
			<a href={props.url} target="_blank" class="course-item">
				{props.name}
			</a>
		</p>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App