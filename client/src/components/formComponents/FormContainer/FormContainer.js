import React from 'react';
import Form from 'react-jsonschema-form';
import axios from 'axios';

import { MOCK_GENERATOR_PATH, MOCK_EVENT_PAGE } from '../../../constants/constants';

// types
// - object
// - array
// - boolean
// - string
// - number

// const getForm = (mock) => {
//     console.log(mock);
// }

async function onSubmit({ formData }, e) {
	console.log('Data submitted: ', formData);

	try {
		const res = await axios.post(`${MOCK_GENERATOR_PATH}${MOCK_EVENT_PAGE}`, formData);
		console.log('res', res);
	} catch (e) {
		console.error('Failed mock generation request');
	}
}

function FormContainer(props) {
	const { mock } = props;
	let form = <div></div>;

	if (Object.keys(mock).length !== 0) {
		form = <Form schema={mock} onSubmit={onSubmit} />;
	}

	return (
		<div>
			<div>I am the form</div>
			{form}
		</div>
	);
}

export default FormContainer;
