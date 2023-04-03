import React, { useEffect, useState } from "react";
import {
	Col,
	Row,
	// Tab, Tabs
} from "react-bootstrap";
import SoulCard from "./SoulInfo/SoulCard";
import logo from "../assets/logo.png";
import "./landing.css";
import splogo from "../assets/splogo.png";
import urlogo from "../assets/urlogo.png";
import srlogo from "../assets/srlogo.png";
import rlogo from "../assets/rlogo.png";
import mlogo from "../assets/mlogo.png";

function Landing(props) {
	const [soulList, setSoulList] = useState({
		sp: "",
		ur: "",
		sr: "",
		r: "",
		m: "",
	});
	// eslint-disable-next-line
	useEffect(
		React.useCallback(() => {
			let cardJson = require("../assets/cardMod.json").sort((a, b) => {
				return a.name.localeCompare(b.name);
			});
			setSoulList((prevState) => {
				let newList = { ...prevState };
				newList.sp = cardJson
					.filter((soul) => {
						return soul.rarity === "5";
					})
					.map(mapSoulToCard);
				newList.ur = cardJson
					.filter((soul) => {
						return soul.rarity === "4";
					})
					.map(mapSoulToCard);
				newList.sr = cardJson
					.filter((soul) => {
						return soul.rarity === "3";
					})
					.map(mapSoulToCard);
				newList.r = cardJson
					.filter((soul) => {
						return soul.rarity === "2";
					})
					.map(mapSoulToCard);
				newList.m = cardJson
					.filter((soul) => {
						return soul.rarity === "1";
					})
					.map(mapSoulToCard);
				return newList;
			});
		}, []),
		[]
	);
	const mapSoulToCard = (soul, i) => {
		return <SoulCard soul={soul} logo={logo} key={i} />;
	};
	return (
		<div>
			{/* <Tabs className="landing-tabs">
				<Tab eventKey="All" title="Food Souls"></Tab>
				<Tab eventKey="Artifacts" title="Artifacts">
					<p>Coming Soon</p>
				</Tab>
				<Tab eventKey="Future" title="Future">
					<p>Coming Soon</p>
				</Tab>
			</Tabs> */}
			<h1 style={{ marginBottom: "20px" }}>식신 백과사전</h1>
			<Row className="justify-content-center">
				<Col sm={2}>
					<img src={splogo} alt="sp" />
				</Col>
				<Col>
					<div className="landing-row">{soulList.sp}</div>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col sm={2}>
					<img src={urlogo} alt="ur" />
				</Col>
				<Col>
					<div className="landing-row">{soulList.ur}</div>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col sm={2}>
					<img src={srlogo} alt="sr" />
				</Col>
				<Col>
					<div className="landing-row">{soulList.sr}</div>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col sm={2}>
					<img src={rlogo} alt="r" />
				</Col>
				<Col>
					<div className="landing-row">{soulList.r}</div>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col sm={2}>
					<img src={mlogo} alt="m" />
				</Col>
				<Col>
					<div className="landing-row">{soulList.m}</div>
				</Col>
			</Row>
		</div>
	);
}

export default Landing;
