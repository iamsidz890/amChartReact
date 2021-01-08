import React, { useState, Fragment } from "react";
import AssetDetails from "./assetDetails";
import AssetGraph from "./assetGraph";
import Checkbox from "./Checkbox";
import Modal from "./Modal";
import Dropdown from "./dropdown";

import {
	EuiIcon,
	EuiTabbedContent,
	EuiTitle,
	EuiText,
	EuiSpacer,
	EuiFieldSearch,
	EuiFlexGroup,
	EuiFlexItem,
} from "@elastic/eui";

export default () => {
	const [value, setValue] = useState("");

	const onChange = (e) => {
		setValue(e.target.value);
	};
	const tabs = [
		{
			id: "cobalt--id",
			name: "Feature Plots",
			content: (
				<Fragment>
					<EuiSpacer />

					<EuiSpacer />
					<EuiFlexGroup>
						<EuiFlexItem grow={false}>
							<EuiFieldSearch
								grow={false}
								placeholder='Feature Tag Name '
								value={value}
								onChange={(e) => onChange(e)}
								aria-label='Use aria labels when no actual label is in use'
							/>
							<EuiSpacer />
							<EuiSpacer />
							<Checkbox />
						</EuiFlexItem>
						<EuiFlexItem>
							<AssetGraph />
						</EuiFlexItem>
					</EuiFlexGroup>
				</Fragment>
			),
		},
		{
			id: "dextrose--id",
			name: "Similar Alerts",
			content: (
				<Fragment>
					<EuiFlexGroup
						gutterSize='xs'
						alignItems='center'
						justifyContent='flexEnd'>
						<EuiFlexItem grow={false}>
							<Modal />
						</EuiFlexItem>
						<EuiFlexItem grow={false}>
							<Modal />
						</EuiFlexItem>
						<EuiFlexItem grow={false}>
							<Dropdown />
						</EuiFlexItem>
					</EuiFlexGroup>
				</Fragment>
			),
		},
	];

	return (
		<EuiTabbedContent
			display='condensed'
			style={{ padding: 20, marginHorizontal: 20 }}
			className='eui-textLeft'
			tabs={tabs}
			initialSelectedTab={tabs[1]}
			autoFocus='selected'
			onTabClick={(tab) => {
				console.log("clicked tab", tab);
			}}
		/>
	);
};
