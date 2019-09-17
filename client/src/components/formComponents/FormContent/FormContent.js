import React from "react";

import FormTitle from "../FormTitle/FormTitle";

function FormContent(props) {
    const { title, mock } = props;

    return (
        <div>
            <FormTitle title={title} />
        </div>
    );
}

export default FormContent;
