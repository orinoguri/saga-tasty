import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./landing.css";

function Resources() {
	return (
		<>
			<h1>자원</h1>
			<Row>
				<Col sm={6}>
					<Card className="resource-card">
						<Card.Title>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://cafe.naver.com/tastysaga"
							>
								테사 내이버 카패
							</a>
						</Card.Title>
					</Card>
					<Card className="resource-card">
						<Card.Title>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://namu.wiki/w/%ED%85%8C%EC%9D%B4%EC%8A%A4%ED%8B%B0%20%EC%82%AC%EA%B0%80"
							>
								나무 위키
							</a>
						</Card.Title>
					</Card>
					<Card className="resource-card">
						<Card.Title>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://food-fantasy.fandom.com/wiki/Food_Fantasy_Wiki"
							>
								글로벌 위키
							</a>
						</Card.Title>
					</Card>
				</Col>
				<Col sm={6}>
					<Card className="resource-card">
						<Card.Title>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://wiki.biligame.com/szqy/首页"
							>
								중국 위키
							</a>
						</Card.Title>
					</Card>
					<Card className="resource-card">
						<Card.Title>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://wiki.biligame.com/szqy/首页"
							>
								중국 웨이보
							</a>
						</Card.Title>
					</Card>
				</Col>
			</Row>
		</>
	);
}

export default Resources;
