import React from "react";
import Review from "./Review";
import { FaGithubSquare } from "react-icons/fa";

function App() {
	return (
		<main>
			<div className="container"></div>
			<div className="title">
				<h2>our reviews</h2>
				<Review />
			</div>
		</main>
	);
}

export default App;
