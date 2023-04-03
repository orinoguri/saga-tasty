import React from "react";
import "./soul.css";
import defenseIcon from "../../assets/defenseicon.png";
import strengthIcon from "../../assets/strengthicon.png";
import supportIcon from "../../assets/supporticon.png";
import magicIcon from "../../assets/magicicon.png";
import { useNavigate } from "react-router-dom";

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
				src={attrImg()}
				width="40"
				height="40"
				alt="logo"
			/>
			<div className="soul-name">{props.soul.name}</div>
		</div>
	);
}

export default SoulCard;
