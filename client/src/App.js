import React, { useState, useEffect } from "react";
import axios from "axios";

const path = "http://localhost:8000/supported-requests";

function App() {
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(path);

            console.log(result);
            setFolders(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Mock generator</h2>
            <div>
                <h3>Pick your mock</h3>
                <div>{folders.children && folders.children[0].name}</div>
            </div>
            <div>
                <h3>Mock area</h3>
            </div>
        </div>
    );
}

export default App;
