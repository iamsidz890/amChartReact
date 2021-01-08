import React, { useState } from "react";

import { EuiCheckboxGroup } from "@elastic/eui";

import { htmlIdGenerator } from "@elastic/eui/lib/services";
const idPrefix = htmlIdGenerator()();

export default () => {
	const checkboxes = [
		{
			id: `${idPrefix}0`,
			label: "EC2 IST WEDF 45",
			"data-test-sub": "dts_test",
		},
		{
			id: `${idPrefix}1`,
			label: "EC2 IST WEDF 45",
			className: "classNameTest",
		},
		{
			id: `${idPrefix}1`,
			label: "EC2 IST WEDF 45",
			className: "classNameTest",
		},
		{
			id: `${idPrefix}1`,
			label: "EC2 IST WEDF 45",
			className: "classNameTest",
		},
		{
			id: `${idPrefix}2`,
			label: "EC2 IST WEDF 45",
			disabled: true,
		},
		{
			id: `${idPrefix}0`,
			label: "EC2 IST WEDF 45",
			"data-test-sub": "dts_test",
		},
		{
			id: `${idPrefix}0`,
			label: "EC2 IST WEDF 45",
			"data-test-sub": "dts_test",
		},
		{
			id: `${idPrefix}0`,
			label: "EC2 IST WEDF 45",
			"data-test-sub": "dts_test",
		},
		{
			id: `${idPrefix}0`,
			label: "EC2 IST WEDF 45",
			"data-test-sub": "dts_test",
		},
		{
			id: `${idPrefix}0`,
			label: "EC2 IST WEDF 45",
			"data-test-sub": "dts_test",
		},
		{
			id: `${idPrefix}0`,
			label: "EC2 IST WEDF 45",
			"data-test-sub": "dts_test",
		},
	];
	const [checkboxIdToSelectedMap, setCheckboxIdToSelectedMap] = useState({
		[`${idPrefix}1`]: true,
	});

	const onChange = (optionId) => {
		const newCheckboxIdToSelectedMap = {
			...checkboxIdToSelectedMap,
			...{
				[optionId]: !checkboxIdToSelectedMap[optionId],
			},
		};
		setCheckboxIdToSelectedMap(newCheckboxIdToSelectedMap);
	};

	return (
		<EuiCheckboxGroup
			options={checkboxes}
			idToSelectedMap={checkboxIdToSelectedMap}
			onChange={(id) => onChange(id)}
		/>
	);
};
