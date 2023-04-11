import React, { useContext } from "react";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import "./soul.css";
import { SettingsContext } from "../../contexts/SettingsContext";

function Artifact(props) {
	const { settings } = useContext(SettingsContext);
	const artiTab = (num) => {
		return (
			<Tab eventKey={num} title={num}>
				<Row className="row-one-label">
					<Col sm={2}>
						<div></div>
					</Col>
					<Col>
						<h4>A</h4>
					</Col>
					<Col>
						<h4>B</h4>
					</Col>
					<Col>
						<h4>C</h4>
					</Col>
				</Row>
				{artiTableRow("node1", num)}
				{artiTableRow("node2", num)}
				{artiTableRow("node3", num)}
				{artiTableRow("node4", num)}
				{artiTableRow("node5", num)}
			</Tab>
		);
	};
	const artiTableRow = (node, num) => {
		return (
			<Row className={`table-row ${props.arti[node].attr}`}>
				<Col sm={2} className="arti-label">
					<div>{node.toUpperCase()}</div>
					<div>{attrTextConvert(props.arti[node].attr)}</div>
				</Col>
				<Col className="arti-descr">
					<div>{props.arti[node].antler[Number(num) - 1]}</div>
				</Col>
				<Col className="arti-descr">
					<div>{props.arti[node].striped[Number(num) - 1]}</div>
				</Col>
				<Col className="arti-descr">
					<div>{props.arti[node].bushy[Number(num) - 1]}</div>
				</Col>
			</Row>
		);
	};
	const attrTextConvert = (txt) => {
		switch (txt) {
			case "atk":
				return "공격력";
			case "def":
				return "방어럭";
			case "hp":
				return "HP";
			case "crate":
				return "치명타";
			case "cdmg":
				return "치명피해";
			case "spd":
				return "공격속도";
			default:
				return "";
		}
	};
	return (
		<>
			{props.arti && (
				<Tabs defaultActiveKey={settings.artifact.toString()} justify>
					{artiTab("1")}
					{artiTab("2")}
					{artiTab("3")}
					{artiTab("4")}
					{artiTab("5")}
					{artiTab("6")}
					{artiTab("7")}
					{artiTab("8")}
					{artiTab("9")}
					{artiTab("10")}
				</Tabs>
			)}
		</>
	);
}

export default Artifact;
