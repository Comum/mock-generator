import React from "react";

import Header from './components/header/header';
import MockHeader from './components/mockContent/mockContent';
import RouteSelecter from './components/routeSelector/routeSelector';

function App() {

    return (
        <div>
            <Header />
            <RouteSelecter />
            <MockHeader />
        </div>
    );
}

export default App;
