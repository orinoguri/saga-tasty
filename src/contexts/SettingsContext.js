import { createContext, useState, useEffect } from "react";

const getInitialState = () => {
	const settings = localStorage.getItem("saga-settings");
	const preset = {
		lang: "kr",
		skill: 1,
		artifact: 1,
		showProfile: true,
	};
	return settings ? JSON.parse(settings) : preset;
};
export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {
	const [settings, setSettings] = useState(getInitialState);
	const changeLangSettings = (data) => {
		setSettings((prev) => {
			return { ...prev, lang: data };
		});
	};
	const changeSkillSettings = (data) => {
		setSettings((prev) => {
			return { ...prev, skill: data };
		});
	};
	const changeArtifactSettings = (data) => {
		setSettings((prev) => {
			return { ...prev, artifact: data };
		});
	};
	const changeProfileShow = (bool) => {
		setSettings((prev) => {
			return { ...prev, showProfile: bool };
		});
	};

	useEffect(() => {
		localStorage.setItem("saga-settings", JSON.stringify(settings));
	}, [settings]);

	return (
		<SettingsContext.Provider
			value={{
				settings,
				changeLangSettings,
				changeSkillSettings,
				changeArtifactSettings,
				changeProfileShow,
			}}
		>
			{props.children}
		</SettingsContext.Provider>
	);
};

export default SettingsContextProvider;
