import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { SettingsContext } from "../contexts/SettingsContext";
import "./landing.css";

function Header() {
	const { settings, changeSkillSettings, changeArtifactSettings } =
		useContext(SettingsContext);
	const [hideThisShit] = useState(false);
	const [skillOptions] = useState(generateNums(41));
	const [artiOptions] = useState(generateNums(10));
	function generateNums(max) {
		let arr = [];
		for (let i = 1; i <= max; i++) {
			arr.push(
				<option key={i} value={i}>
					{i}
				</option>
			);
		}
		return arr;
	}
	return (
		<>
			<Container className="heading-container">
				{hideThisShit && (
					<>
						<Form.Label className="header-label">스킬</Form.Label>
						<Form.Select
							size="sm"
							className="select-level"
							onChange={(e) =>
								changeSkillSettings(e.currentTarget.value)
							}
							defaultValue={settings?.skill}
						>
							{skillOptions}
						</Form.Select>
					</>
				)}
				<Form.Label className="header-label">소울웨폰</Form.Label>
				<Form.Select
					size="sm"
					className="select-level"
					defaultValue={settings?.artifact}
					onChange={(e) => changeArtifactSettings(e.currentTarget.value)}
				>
					{artiOptions}
				</Form.Select>
			</Container>
		</>
	);
}

export default Header;
