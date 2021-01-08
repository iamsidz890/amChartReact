import React, { useState } from "react";
import "./Upper.css";
import "@elastic/eui/dist/eui_theme_light.css";
import { EuiRadioGroup, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import Date from "./Date";

import { htmlIdGenerator } from "@elastic/eui/lib/services";

const idPrefix = htmlIdGenerator()();

function Upper() {
	const radios = [
		{
			id: `${idPrefix}0`,
			label: "Displacement",
		},
		{
			id: `${idPrefix}1`,
			label: "Velocity",
		},
		{
			id: `${idPrefix}2`,
			label: "Acceleration",
			// disabled: true,
		},
	];

	const [radioIdSelected, setRadioIdSelected] = useState(`${idPrefix}0`);

	const onChange = (optionId) => {
		setRadioIdSelected(optionId);
	};
	return (
		<EuiFlexGroup>
			<EuiFlexItem>
				<EuiRadioGroup
					options={radios}
					direction='row'
					idSelected={radioIdSelected}
					onChange={(id) => onChange(id)}
					name='radio group'
				/>
			</EuiFlexItem>
			<EuiFlexItem>
				<Date />
			</EuiFlexItem>
		</EuiFlexGroup>
	);
}

export default Upper;
