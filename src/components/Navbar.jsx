import React from "react";
import { Container } from "react-bootstrap";
import { useNavigation } from "react-router-dom";

function Navbar() {
	const navigate = useNavigation();
	const goToPage = (e) => {
		navigate(e.currentTarget.dataset.page);
	};
	return (
		<nav className="navbar navbar-expand-md primary-color">
			<Container>
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
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav me-auto mb-2 mb-md-0">
						<li className="nav-item">
							<button
								className="nav-link px-2 text-white link-button"
								data-page="/"
								onClick={goToPage}
							>
								HOME
							</button>
						</li>
						<li className="nav-item">
							<button
								className="nav-link px-2 text-white link-button"
								data-page="/about"
								onClick={goToPage}
							>
								ABOUT
							</button>
						</li>
					</ul>
				</div>
			</Container>
		</nav>
	);
}

export default Navbar;
