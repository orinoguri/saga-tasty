import React from "react";
import { Row } from "react-bootstrap";

function About() {
	return (
		<>
			<h1>메모</h1>
			<Row style={{ textAlign: "left" }}>
				<h4>
					테사 상황이 부란해서 제가 게임 파일애서 식신 이야기들 다
					꺼냈습니다. 아직 게임애 데이터가 헐신 많은대 시간 걸러서... ㅠㅠ
				</h4>
				<h2>할일</h2>
				<div style={{ paddingLeft: "12px", paddingRight: "12px" }}>
					<ul>
						<li>스킬</li>
						<li>SP 이아기</li>
						<li>더 멋진 태마</li>
					</ul>
				</div>
				<hr />
				<h4>
					This is a Tasty Saga/Food Fantasy project I embarked on in
					response to the current state of the game. I figured it would be
					a huge waste for everything to go before players had a chance to
					read through all the content so I took it upon myself to rip the
					data from the game file to share to everyone. More things will be
					added in due time but for now enjoy the content ^^
				</h4>
			</Row>
		</>
	);
}

export default About;
