import React, { useEffect, useState } from "react";
// import { Col, Row } from "react-bootstrap";
import SoulCard from "./SoulInfo/SoulCard";
import logo from "../assets/logo.png";
import "./landing.css";

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
			<h1>식신</h1>
			<h2>SP</h2>
			<div className="landing-row">{soulList.sp}</div>
			<h2>UR</h2>
			<div className="landing-row">{soulList.ur}</div>
			<h2>SR</h2>
			<div className="landing-row">{soulList.sr}</div>
			<h2>R</h2>
			<div className="landing-row">{soulList.r}</div>
			<h2>M</h2>
			<div className="landing-row">{soulList.m}</div>
		</div>
	);
}

export default Landing;
