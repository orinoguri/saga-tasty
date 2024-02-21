import React, { useEffect, useState, useCallback, useContext } from "react";
import { Col, Row, Tabs, Tab, Button } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import defenseIcon from "../../assets/defenseicon.png";
import strengthIcon from "../../assets/strengthicon.png";
import supportIcon from "../../assets/supporticon.png";
import magicIcon from "../../assets/magicicon.png";
import splogo from "../../assets/splogo.png";
import urlogo from "../../assets/urlogo.png";
import srlogo from "../../assets/srlogo.png";
import rlogo from "../../assets/rlogo.png";
import mlogo from "../../assets/mlogo.png";
import "./soul.css";
import Artifact from "./Artifact";
import { SettingsContext } from "../../contexts/SettingsContext";

function Soul(props) {
	const { settings, changeProfileShow } = useContext(SettingsContext);
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
	const navigate = useNavigate();
	// eslint-disable-next-line
	useEffect(
		useCallback(() => {
			if (state?.type === "Soul_View" && state?.payload) {
				setCard((prevState) => {
					let newCard = { ...prevState };
					newCard = state.payload;
					newCard.arti = require("../../assets/cardArtiMod.json")[
						newCard.id
					];
					return newCard;
				});
			} else {
				let cardJson = require("../../assets/cardMod.json");
				setCard((prevState) => {
					let newCard = { ...prevState };
					newCard = cardJson.filter((card) => card.name === params.id)[0];
					newCard.arti = require("../../assets/cardArtiMod.json")[
						newCard.id
					];
					return newCard;
				});
			}
		}, [state?.type, state?.payload, params?.id]),
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
	const rarityImg = () => {
		switch (card?.rarity) {
			case "1":
				return mlogo;
			case "2":
				return rlogo;
			case "3":
				return srlogo;
			case "4":
				return urlogo;
			case "5":
				return splogo;
			default:
				return "";
		}
	};
	const soulImg = () => {
		return require(`../../assets/head/card_icon_${card.id}.png`);
	};

	function soulTable(label, info) {
		return (
			<>
				<div>
					<span style={{ fontWeight: "700" }}>{label}: </span>
					<span>{Array.isArray(info) ? info.join() : info}</span>
				</div>
			</>
		);
	}
	function voiceTable(label, info) {
		return (
			<>
				<Row className="voice-table">
					<Col sm={3} style={{ fontWeight: "700" }}>
						<div>{label}</div>
					</Col>
					<Col>
						<div>{info}</div>
					</Col>
				</Row>
				<hr />
			</>
		);
	}

	const soulStoryTab = (chapter) => {
		return (
			<>
				<h3 style={{ marginTop: "20px" }}>{card.story[chapter].name}</h3>
				<div className="tab-story">
					{card.story[chapter].descr.split("\n").map((str) => (
						<p>{str}</p>
					))}
				</div>
			</>
		);
	};

	const toggleProfile = () => {
		changeProfileShow(!settings.showProfile);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const onBackClick = (e) => {
		navigate(e.currentTarget.dataset.page);
	};

	return (
		<div className="soul-profile">
			<Row>
				<Col md={4} className="back-button">
					<Button variant="light" onClick={onBackClick} data-page="/">
						←뒤로
					</Button>
					<Button variant="light" onClick={toggleProfile}>
						{settings.showProfile ? "숨기기" : "보이기"}
					</Button>
				</Col>
			</Row>
			<h2>
				<img src={rarityImg()} className="rarity-img" alt="rare" />

				{card.name}
			</h2>
			<Row>
				{settings.showProfile && (
					<Col md={4}>
						{card.profile ? (
							<>
								{" "}
								{card.id && (
									<img
										src={soulImg()}
										className={`soul-img rare-${card.rarity}`}
										alt="soul"
									/>
								)}
								<div>
									<img
										src={attrImg()}
										className="attr-img"
										alt="attr"
									/>
									<span>{card.attr}</span>
								</div>
								{soulTable("유형", card.profile.type)}
								{soulTable("발원지", card.profile.origin)}
								{soulTable("탄생 시기", card.profile.age)}
								{soulTable("성격", card.profile.nature)}
								{soulTable("키", card.profile.height)}
								{soulTable("관계", card.profile.nexus)}
								<hr />
								<div style={{ fontWeight: "700" }}>모토</div>
								<div>{card.profile.motto}</div>
								<hr />
								<div style={{ fontWeight: "700" }}>소개</div>
								<div>{card.descr}</div>
							</>
						) : (
							<div>error</div>
						)}
					</Col>
				)}
				<Col>
					<Tabs defaultActiveKey="story" className="soul-tab" justify>
						<Tab eventKey="story" title="이야기">
							{card?.story?.["1"]?.descr ? (
								<Tabs
									defaultActiveKey="first"
									className="soul-tab"
									justify
								>
									<Tab eventKey="first" title="I.">
										{soulStoryTab("1")}
									</Tab>
									<Tab eventKey="second" title="II.">
										{soulStoryTab("2")}
									</Tab>
									<Tab eventKey="third" title="III.">
										{soulStoryTab("3")}
									</Tab>
									<Tab eventKey="fourth" title="IV.">
										{soulStoryTab("4")}
									</Tab>
									<Tab eventKey="fifth" title="V.">
										{soulStoryTab("5")}
									</Tab>
								</Tabs>
							) : (
								<div className="coming-soon">Coming Soon</div>
							)}
						</Tab>
						<Tab eventKey="voice" title="오디오 주파수">
							<div className="voice-content">
								{card.voice &&
									card.voice.map((voice) => {
										return voiceTable(voice.name, voice.descr);
									})}
							</div>
						</Tab>
						<Tab eventKey="artifact" title="소울웨폰">
							{card.arti?.node1 ? (
								<Artifact arti={card.arti} />
							) : (
								<div className="coming-soon">없어용</div>
							)}
						</Tab>
					</Tabs>
					<Button
						onClick={scrollToTop}
						variant="light"
						style={{ marginTop: "10px" }}
					>
						Top
					</Button>
				</Col>
			</Row>
		</div>
	);
}

export default React.memo(Soul);
