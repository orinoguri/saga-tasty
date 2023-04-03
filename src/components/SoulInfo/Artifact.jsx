import React from "react";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import "./soul.css";

function Artifact(props) {
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
					<div>{props.arti[node].attr.toUpperCase()}</div>
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
	return (
		<>
			{props.arti && (
				<Tabs defaultActiveKey="1" justify>
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
