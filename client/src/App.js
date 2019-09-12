import React, { useState } from "react";

import Header from "./components/header/header";
import MockHeader from "./components/mockContent/mockContent";
import MockSelecter from "./components/mockSelector/mockSelector";

function App() {
    const [pageType, setPageType] = useState("empty");
    const onClickMock = (mock) => {
        setPageType(mock);
    };

    return (
        <div>
            <Header />
            <MockSelecter onClickCallback={onClickMock} />
            <MockHeader pageType={pageType} />
        </div>
    );
}

export default App;
