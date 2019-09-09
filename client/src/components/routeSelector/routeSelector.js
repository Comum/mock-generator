import React, { useState, useEffect } from "react";
import axios from "axios";

import { path } from "../../constants/constants";

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

const getMockButtons = (mocks) => {
    if (!mocks.length) {
        return (<div>No mocks available</div>);
    }

    return mocks.map((mock, index) => { 
        return (<div key={index}>{mock}</div>);
    });
};

function RouteSelector() {
    const [folders, setFolders] = useState([]);
    let mocks = [];
    let mocksButtons = [];

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(path);

            setFolders(result.data);
        };
        fetchData();
    }, []);

    if (Object.keys(folders).length) {
        mocks = getMocks(folders);
    }

    mocksButtons = getMockButtons(mocks);

    return (
        <div>
            <div>
                <h3>Pick your mock</h3>
                <div>{mocksButtons}</div>
            </div>
        </div>
    );
}

export default RouteSelector;
