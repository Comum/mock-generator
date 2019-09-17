import React from "react";

import { EMPTY_MOCK_TITLE, NO_MOCK_SELECTED } from "../../../constants/constants";
import { capitalise } from "../../../utils/utils";

function getFormatedTitle(title) {
    if (title === EMPTY_MOCK_TITLE) {
        return NO_MOCK_SELECTED;
    }

    const words = title.split("-");
    let formatedTitle = "";

    words.forEach((word) => {
        formatedTitle = `${formatedTitle}${capitalise(word)} `;
    });

    return formatedTitle;
}

function FormTitle(props) {
    const { title } = props;
    const formatedTitle = getFormatedTitle(title);

    return <h2>{formatedTitle}</h2>;
}

export default FormTitle;
