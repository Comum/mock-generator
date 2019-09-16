import React, { useState, useEffect } from "react";
import axios from "axios";

const MockContent = (props) => {
    const { pageType } = props;
    const { requestPath } = props;
    const [mock, setMock] = useState({});

    useEffect(() => {
        if (requestPath) {
            const fetchData = async () => {
                const result = await axios(requestPath);

                setMock(result.data);
            };
            fetchData();
        }
    }, [requestPath]);

    return (
        <div>
            <h3>Mock area</h3>
            <div>
                <div>{pageType}</div>
                <div>{requestPath}</div>
            </div>
        </div>
    );
};

export default MockContent;
