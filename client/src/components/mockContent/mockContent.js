import React, { useState, useEffect } from "react";
import axios from "axios";

import FormContent from "../formComponents/FormContent/FormContent";

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
            <FormContent title={pageType} mock={mock} />
        </div>
    );
};

export default MockContent;
