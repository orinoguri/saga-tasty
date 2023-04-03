import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Soul from "./components/SoulInfo/Soul";
import Footer from "./components/Footer";
import About from "./components/About";
import { Container } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<Nav />
			<Container className="app-container">
				<main role="main">
					<Routes>
						<Route path="/saga-tasty/" element={<Landing />} />
						<Route path="/saga-tasty/:id" element={<Soul />} />
						<Route path="/saga-tasty/about" element={<About />} />
					</Routes>
				</main>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
