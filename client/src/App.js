import React, { useState, useEffect } from "react";
import axios from "axios";

const path = "http://localhost:8000/supported-requests";

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

function App() {
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
            <h2>Mock generator</h2>
            <div>
                <h3>Pick your mock</h3>
                <div>{mocksButtons}</div>
            </div>
            <div>
                <h3>Mock area</h3>
            </div>
        </div>
    );
}

export default App;
