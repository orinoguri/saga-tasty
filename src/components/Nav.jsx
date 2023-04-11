import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import sagatasty from "../assets/sagatasty.png";
import "./landing.css";

function Nav() {
	const navigate = useNavigate();
	const goToPage = (e) => {
		navigate(e.currentTarget.dataset.page);
	};
	return (
		<nav
			className="navbar navbar-expand-md navbar-dark primary-color"
			aria-label="Fourth navbar example"
		>
			<Container className="navbar-container">
				<a className="navbar-brand" href="/">
					<img src={sagatasty} alt="logo" className="navbar-logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarsExample04"
					aria-controls="navbarsExample04"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarsExample04">
					<ul className="navbar-nav me-auto mb-2 mb-md-0">
						<li className="nav-item">
							<button
								className="nav-link px-2 text-black link-button"
								id="home"
								data-page="/"
								onClick={goToPage}
							>
								홈페이지
							</button>
						</li>
						<li className="nav-item">
							<button
								className="nav-link px-2 text-black link-button"
								data-page="/about"
								onClick={goToPage}
							>
								메모
							</button>
						</li>
						<li className="nav-item">
							<button
								className="nav-link px-2 text-black link-button"
								data-page="/resources"
								onClick={goToPage}
							>
								자원
							</button>
						</li>
					</ul>
					<div className="text-end"></div>
				</div>
			</Container>
		</nav>
	);
}

export default Nav;
