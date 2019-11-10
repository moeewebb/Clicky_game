import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

function App() {
    return (
        <div className="App">
            <header className="App-Header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello World</p>
                <p>
                    Edit <code>src/App.js</code> save and reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>


        </div>
    );
}
 export default App;