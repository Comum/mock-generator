import React, { useState } from "react";

import Header from "./components/header/header";
import MockHeader from "./components/mockContent/mockContent";
import MockSelecter from "./components/mockSelector/mockSelector";

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
            <MockHeader pageType={pageType} requestPath={requestPath} />
        </div>
    );
}

export default App;
