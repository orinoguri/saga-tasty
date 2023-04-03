import React, { useEffect, useState, useCallback } from "react";
import { Col, Row, Tabs, Tab } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import defenseIcon from "../../assets/defenseicon.png";
import strengthIcon from "../../assets/strengthicon.png";
import supportIcon from "../../assets/supporticon.png";
import magicIcon from "../../assets/magicicon.png";
import "./soul.css";

function Soul(props) {
	const [card, setCard] = useState({
		name: "",
		id: "",
		attr: "",
		rarity: "",
		descr: "",
		profile: {
			type: "",
			origin: "",
			age: "",
			nature: "",
			nexus: [],
			height: "",
			motto: "",
		},
		story: {
			1: { name: "", descr: "" },
			2: { name: "", descr: "" },
			3: { name: "", descr: "" },
			4: { name: "", descr: "" },
			5: { name: "", descr: "" },
		},
	});
	const params = useParams();
	const { state } = useLocation();
	// eslint-disable-next-line
	useEffect(
		useCallback(() => {
			if (state?.type === "Soul_View" && state?.payload) {
				setCard((prevState) => {
					let newCard = { ...prevState };
					newCard = state.payload;
					return newCard;
				});
			} else {
				let cardJson = require("../../assets/cardMod.json");
				setCard((prevState) => {
					let newCard = { ...prevState };
					newCard = cardJson.filter((card) => card.name === params.id)[0];
					return newCard;
				});
			}
		}, [state.type, state.payload, params.id]),
		[]
	);
	const attrImg = () => {
		switch (card?.attr) {
			case "마법형":
				return magicIcon;
			case "공격형":
				return strengthIcon;
			case "지원형":
				return supportIcon;
			case "방어형":
				return defenseIcon;
			default:
				return "";
		}
	};

	function SoulTable(label, info) {
		return (
			<Row>
				<Col sm={3} className="soul-info-label">
					<div>{label}</div>
				</Col>
				<Col>
					<div>{info}</div>
				</Col>
			</Row>
		);
	}

	return (
		<div>
			<Row>
				<Col sm={4}>
					{card.profile ? (
						<>
							<div>{card.name}</div>
							<img src={attrImg()} alt="attr" />
							<div>{card.attr}</div>
							{SoulTable("유형", card.profile.type)}
							{SoulTable("발원지", card.profile.origin)}
							{SoulTable("탄생 시기", card.profile.age)}
							{SoulTable("성격", card.profile.nature)}
							{SoulTable("키", card.profile.height)}
							{SoulTable("관계", "[WIP]")}
							{SoulTable("모토", card.profile.motto)}
							{SoulTable("소개", card.descr)}
						</>
					) : (
						<div>error</div>
					)}
				</Col>
				<Col>
					<Tabs defaultActiveKey="story" className="soul-tab" justify>
						<Tab eventKey="story" title="이아기">
							{card?.story?.["1"]?.descr ? (
								<Tabs defaultActiveKey="first" className="soul-tab">
									<Tab eventKey="first" title={card.story["1"].name}>
										<div className="tab-story">
											{card.story["1"].descr
												.split("\n")
												.map((str) => (
													<p>{str}</p>
												))}
										</div>
									</Tab>
									<Tab eventKey="second" title={card.story["2"].name}>
										<div className="tab-story">
											{card.story["2"].descr
												.split("\n")
												.map((str) => (
													<p>{str}</p>
												))}
										</div>
									</Tab>
									<Tab eventKey="third" title={card.story["3"].name}>
										<div className="tab-story">
											{card.story["3"].descr
												.split("\n")
												.map((str) => (
													<p>{str}</p>
												))}
										</div>
									</Tab>
									<Tab eventKey="fourth" title={card.story["4"].name}>
										<div className="tab-story">
											{card.story["4"].descr
												.split("\n")
												.map((str) => (
													<p>{str}</p>
												))}
										</div>
									</Tab>
									<Tab eventKey="fifth" title={card.story["5"].name}>
										<div className="tab-story">
											{card.story["5"].descr
												.split("\n")
												.map((str) => (
													<p>{str}</p>
												))}
										</div>
									</Tab>
								</Tabs>
							) : (
								<div className="coming-soon">Coming Soon</div>
							)}
						</Tab>
						<Tab eventKey="artifact" title="소울왜폰">
							<div className="coming-soon">Coming Soon</div>
						</Tab>
						<Tab eventKey="other" title="기타">
							<div className="coming-soon">Coming Soon</div>
						</Tab>
					</Tabs>
				</Col>
			</Row>
		</div>
	);
}

export default Soul;
