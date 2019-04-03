import React, { Component } from "react";
import LocationList from "./components/LocationList";
import "./App.css";

const cities = ["Tomelloso,es", "Madrid,es", "Ibiza,es"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities} />
      </div>
    );
  }
}

export default App;
