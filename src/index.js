import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = { c: 1 };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ c: undefined }, () => {
        console.log(this.state);
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>{JSON.stringify(this.state)}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
