import React, { Component } from "react";
import LocationList from "./components/LocationList";
import "./App.css";

const cities = ["Tomelloso,es", "Madrid,es", "Ibiza,es"];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  };
  render() {
    return (
      <div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}
        />
      </div>
    );
  }
}

export default App;
