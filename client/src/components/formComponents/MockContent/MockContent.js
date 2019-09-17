import React from "react";

import FormTitle from "../FormTitle/FormTitle";
import FormContainer from "../FormContainer/FormContainer";

function MockContent(props) {
    const { title, mock } = props;
    let form = <div>Please select a mock.</div>;

    if (Object.keys(mock).length !== 0) {
        form = <FormContainer />;
    }

    return (
        <div>
            <FormTitle title={title} />
            {form}
        </div>
    );
}

export default MockContent;
