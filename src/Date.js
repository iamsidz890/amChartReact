import React, { useState } from "react";

import moment from "moment";
import "@elastic/eui/dist/eui_theme_dark.css";
import { EuiDatePicker, EuiFormRow } from "@elastic/eui";

function Date() {
	const [startDate, setStartDate] = useState(moment());

	const handleChange = (date) => {
		setStartDate(date);
	};

	return (
		<EuiFormRow label='Select a date'>
			<EuiDatePicker selected={startDate} onChange={handleChange} />
		</EuiFormRow>
	);
}

export default Date;
