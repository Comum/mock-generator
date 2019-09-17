import { SCHEMAS_PATH, FORM_SCHEMA } from "../constants/constants";

const getRequestPath = (mock) => {
    const mockPath = `${SCHEMAS_PATH}${mock}/${FORM_SCHEMA}`;

    return mockPath;
};

const capitalise = (string) => string.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

export {
    getRequestPath,
    capitalise
};
