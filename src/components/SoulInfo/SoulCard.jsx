import React from "react";
import "./soul.css";
import defenseIcon from "../../assets/defenseicon.png";
import strengthIcon from "../../assets/strengthicon.png";
import supportIcon from "../../assets/supporticon.png";
import magicIcon from "../../assets/magicicon.png";

function SoulCard(props) {
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
	return (
		<div className="soul-card" key={props.key}>
			<img src={attrImg()} width="40" height="40" alt="logo" />
			<div className="soul-name">{props.soul.name}</div>
		</div>
	);
}

export default SoulCard;
