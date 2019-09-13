import React, { useState } from "react";

import Header from "./components/header/header";
import MockHeader from "./components/mockContent/mockContent";
import MockSelecter from "./components/mockSelector/mockSelector";

function App() {
    const [pageType, setPageType] = useState("empty");
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
