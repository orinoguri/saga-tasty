import React from "react";
import "./soul.css";
import defenseIcon from "../../assets/defenseicon.png";
import strengthIcon from "../../assets/strengthicon.png";
import supportIcon from "../../assets/supporticon.png";
import magicIcon from "../../assets/magicicon.png";
import { useNavigate } from "react-router-dom";
import blankSoul from "../../assets/card_icon_300264.png";

function SoulCard(props) {
	const navigate = useNavigate();
	const attrImg = () => {
		switch (props.soul.attr) {
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
	const soulImg = () => {
		return require(`../../assets/head/card_icon_${props.soul.id}.png`);
	};
	const onCardClick = (e) => {
		let targetName = e.currentTarget.dataset.page;
		const stateForTransport = { type: "Soul_View", payload: props.soul };
		navigate(`./${targetName}`, { state: stateForTransport });
	};
	return (
		<div
			className="soul-card"
			onClick={onCardClick}
			data-page={props.soul.name}
		>
			<img
				className="attr-img"
				style={{ position: "absolute" }}
				src={attrImg()}
				width="20"
				height="20"
				alt="logo"
			/>
			<img
				className="rounded-circle"
				src={soulImg() || blankSoul}
				width="60"
				alt="head"
			/>

			<div className="soul-name">{props.soul.name}</div>
		</div>
	);
}

export default React.memo(SoulCard);
