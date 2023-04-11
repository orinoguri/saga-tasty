import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Soul from "./components/SoulInfo/Soul";
import Footer from "./components/Footer";
import About from "./components/About";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import SettingsContextProvider from "./contexts/SettingsContext";

function App() {
	return (
		<SettingsContextProvider>
			<div className="App">
				<Nav />
				<Header />
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
		</SettingsContextProvider>
	);
}

export default App;
