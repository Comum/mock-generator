import React from "react";
import Form from "react-jsonschema-form";

// types
// - object
// - array
// - boolean
// - string
// - number

// const getForm = (mock) => {
//     console.log(mock);
// }

function onSubmit({ formData }, e) {
    console.log("Data submitted: ", formData);
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
