import React, { useState } from "react";

import Header from "./components/Header/Header";
import MockArea from "./components/MockArea/MockArea";
import MockSelecter from "./components/MockSelector/MockSelector";

import { EMPTY_MOCK_TITLE } from "./constants/constants";

function App() {
    const [pageType, setPageType] = useState(EMPTY_MOCK_TITLE);
    const [requestPath, setRequestPath] = useState("");
    const onClickMock = (mock, mockRequestPath) => {
        setPageType(mock);
        setRequestPath(mockRequestPath);
    };

    return (
        <div>
            <Header />
            <MockSelecter onClickCallback={onClickMock} />
            <MockArea pageType={pageType} requestPath={requestPath} />
        </div>
    );
}

export default App;
