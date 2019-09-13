import { SCHEMAS_PATH, MAIN_SCHEMA } from '../constants/constants';

const getRequestPath = (mock) => {
    const mockPath = `${SCHEMAS_PATH}${mock}/${MAIN_SCHEMA}`;
    console.log('getRequestPath', mock, SCHEMAS_PATH);

    return mockPath;
};

export {
    getRequestPath
}