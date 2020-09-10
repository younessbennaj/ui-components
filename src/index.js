import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

const App = () => {
    return (<h1>Hello World!</h1>);
}

const root = document.getElementById("root");

ReactDOM.render(
    <App />,
    document.getElementById("root")
)