import React, { useState, useEffect } from "react";
import axios from "axios";

import { SUPPORTED_REQUEST_PATH } from "../../constants/constants";
import { getRequestPath } from "../../utils/utils";

const getMocks = (folders) => {
    let mocks = [];

    if (!folders.children) {
        return mocks;
    }

    folders.children.forEach((folder) => {
        mocks.push(folder.name);
    });
    return mocks;
};

const getMockButtons = (mocks, onClickCallback) => {
    if (!mocks.length) {
        return <div>No mocks available</div>;
    }

    return mocks.map((mock, index) => {
        const mockRequestPath = getRequestPath(mock);
        
        return (
            <div
                key={index}
                onClick={() => {
                    onClickCallback(mock, mockRequestPath);
                }}
            >
                {mock}
            </div>
        );
    });
};

function MockSelector(props) {
    const { onClickCallback } = props;
    const [folders, setFolders] = useState([]);

    let mocks = [];
    let mocksButtons = [];

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(SUPPORTED_REQUEST_PATH);

            setFolders(result.data);
        };
        fetchData();
    }, []);

    if (Object.keys(folders).length) {
        mocks = getMocks(folders);
    }

    mocksButtons = getMockButtons(mocks, onClickCallback);

    return (
        <div>
            <div>
                <h3>Pick your mock</h3>
                <div>{mocksButtons}</div>
            </div>
        </div>
    );
}

export default MockSelector;
