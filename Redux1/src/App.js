import React, { Component } from "react";
import { store } from "./store";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./Buttongroup";

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld tech={store.getState().tech} />
        <ButtonGroup technologies={["React", "Redux", "Native" ]}/>
      </div>
    );
  }
}

export default App;
