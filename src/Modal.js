import React, { useState, Fragment } from "react";
import Alert from "./Alert";

import {
	EuiButton,
	EuiButtonEmpty,
	EuiFieldText,
	EuiForm,
	EuiFormRow,
	EuiModal,
	EuiModalBody,
	EuiModalFooter,
	EuiModalHeader,
	EuiModalHeaderTitle,
	EuiOverlayMask,
	EuiRange,
	EuiSwitch,
	EuiCodeBlock,
	EuiSpacer,
	EuiSuperSelect,
	EuiText,
} from "@elastic/eui";

import { htmlIdGenerator } from "@elastic/eui/lib/services";

export default () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isSwitchChecked, setIsSwitchChecked] = useState(true);
	const [superSelectvalue, setSuperSelectValue] = useState("option_one");

	const onSwitchChange = () =>
		setIsSwitchChecked((isSwitchChecked) => !isSwitchChecked);

	const closeModal = () => setIsModalVisible(false);

	const showModal = () => setIsModalVisible(true);

	const onSuperSelectChange = (value) => {
		setSuperSelectValue(value);
	};

	let modal;

	if (isModalVisible) {
		modal = (
			<EuiOverlayMask>
				<EuiModal onClose={closeModal} initialFocus='[name=popswitch]'>
					<EuiModalHeader>
						<EuiModalHeaderTitle>Label Alert</EuiModalHeaderTitle>
					</EuiModalHeader>
					<Alert />

					<EuiModalFooter>
						<EuiButtonEmpty onClick={closeModal}>Cancel</EuiButtonEmpty>

						<EuiButton onClick={closeModal} fill>
							Save Changes
						</EuiButton>
					</EuiModalFooter>
				</EuiModal>
			</EuiOverlayMask>
		);
	}
	return (
		<div>
			<EuiButton onClick={showModal}>Label Alert</EuiButton>

			{modal}
		</div>
	);
};
