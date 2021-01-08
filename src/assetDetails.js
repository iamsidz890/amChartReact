import React, { useState } from "react";

import { EuiFieldSearch, EuiSwitch } from "@elastic/eui";

export default () => {
	const [value, setValue] = useState("");

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<EuiFieldSearch
				placeholder='Feature Tag Name '
				value={value}
				onChange={(e) => onChange(e)}
				aria-label='Use aria labels when no actual label is in use'
			/>
		</>
	);
};
