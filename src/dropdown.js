import React, { useState } from "react";

import { EuiSelect } from "@elastic/eui";

export default () => {
	const options = [
		{ value: "option_one", text: "Option one" },
		{ value: "option_two", text: "Unresolved" },
		{ value: "option_three", text: "Option three" },
	];

	const [value, setValue] = useState(options[1].value);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<EuiSelect
			grow={false}
			id='selectDocExample'
			options={options}
			value={value}
			onChange={(e) => onChange(e)}
			aria-label='Use aria labels when no actual label is in use'
		/>
	);
};
