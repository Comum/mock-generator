import React, { useState, useEffect } from "react";
import axios from "axios";

const path = "http://localhost:8000/";

function App() {
    const [data, setData] = useState({ hello: '' });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(path);

            console.log(result);
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>Hello {data.hello}</div>
    );
}

export default App;
