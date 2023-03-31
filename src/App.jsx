import "./App.css";
import React from "react";
// import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Profile from "./components/SoulInfo/Profile";
import Footer from "./components/Footer";
import About from "./components/About";
import { Container } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			{/* <Navbar /> */}
			<Container>
				<main role="main">
					<Routes>
						<Route path="/saga-tasty/" element={<Landing />} />
						<Route path="/saga-tasty/profile" element={<Profile />} />
						<Route path="/saga-tasty/about" element={<About />} />
					</Routes>
				</main>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
