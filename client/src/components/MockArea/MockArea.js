import React, { useState, useEffect } from "react";
import axios from "axios";

import MockContent from "../formComponents/MockContent/MockContent";

const MockArea = (props) => {
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
            <MockContent title={pageType} mock={mock} />
        </div>
    );
};

export default MockArea;
