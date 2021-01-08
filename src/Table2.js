import React, { useState, Fragment, useEffect } from "react";

import {
	EuiSuperDatePicker,
	EuiSelect,
	EuiFlexGroup,
	EuiFlexItem,
	EuiFlexGrid,
} from "@elastic/eui";

export default () => {
	const [recentlyUsedRanges, setRecentlyUsedRanges] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [start, setStart] = useState("now-30m");
	const [end, setEnd] = useState("now");

	const onTimeChange = ({ start, end }) => {
		const recentlyUsedRange = recentlyUsedRanges.filter((recentlyUsedRange) => {
			const isDuplicate =
				recentlyUsedRange.start === start && recentlyUsedRange.end === end;
			return !isDuplicate;
		});
		recentlyUsedRange.unshift({ start, end });
		setStart(start);
		setEnd(end);
		setRecentlyUsedRanges(
			recentlyUsedRange.length > 10
				? recentlyUsedRange.slice(0, 9)
				: recentlyUsedRange
		);
		setIsLoading(true);
		startLoading();
	};

	const startLoading = () => {
		setTimeout(stopLoading, 1000);
	};

	const stopLoading = () => {
		setIsLoading(false);
	};

	////////////////////////////---------Form-------------/////////////////////////////////////
	const [store, setStore] = useState([]);
	useEffect(() => {
		fetch("https://uat.4pointx.com:12361/pdm_get_plantdropdown")
			.then((res) => res.json())
			.then((result) => {
				setStore(result);
			});
	}, []);
	let x = store.map((a) => {
		return {
			value: a,
			text: `Plant: ${a}`,
		};
	});
	const options = x;
	const [value, setValue] = useState("Plant-1");
	const onChange = (e) => {
		setValue(e.target.value);
	};

	const [stores, setStores] = useState([]);
	useEffect(() => {
		fetch(`https://uat.4pointx.com:12361/pdm_get_shopdropdown?plant=${value}`)
			.then((res) => res.json())
			.then((result) => {
				setStores(result);
			});
	}, []);
	let y = stores.map((a) => {
		return {
			value: a,
			text: `Shop: ${a}`,
		};
	});
	console.log(y);
	const optionss = y;
	console.log("optionss", optionss);
	const [values, setValues] = useState("Fan");
	const onChanges = (event) => {
		setValues(event.target.value);
	};

	return (
		<Fragment>
			<EuiFlexGroup justifyContent='spaceBetween'>
				<EuiFlexGroup>
					<EuiFlexItem grow={false} style={{ margin: 30 }}>
						<EuiSelect
							id='selectDocExample'
							options={options}
							value={value}
							onChange={(e) => onChange(e)}
							aria-label='Use aria labels when no actual label is in use'
						/>
					</EuiFlexItem>
					<EuiFlexItem component='span' grow={false} style={{ margin: 30 }}>
						<EuiSelect
							id='selectDocExamples'
							options={optionss}
							value={values}
							onChange={(event) => onChanges(event)}
							aria-label='Use aria labels when no actual label is in use'
						/>
					</EuiFlexItem>
				</EuiFlexGroup>

				<EuiFlexItem style={{ margin: 20 }}>
					<EuiSuperDatePicker
						isLoading={isLoading}
						start={start}
						end={end}
						onTimeChange={onTimeChange}
						showUpdateButton={false}
					/>
				</EuiFlexItem>
			</EuiFlexGroup>
		</Fragment>
	);
};
