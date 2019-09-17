import { SCHEMAS_PATH, MAIN_SCHEMA } from "../constants/constants";

const getRequestPath = (mock) => {
    const mockPath = `${SCHEMAS_PATH}${mock}/${MAIN_SCHEMA}`;

    return mockPath;
};

const capitalise = (string) => string.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

export {
    getRequestPath,
    capitalise
};
