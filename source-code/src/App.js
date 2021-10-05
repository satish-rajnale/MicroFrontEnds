import React from "react";
import Home from "./containers/Home";
import FoodData from "./data/data.json";
function App() {
  return (
    <div className="App">
      <h3>Welcome to Foodie Club</h3>
      <Home data={FoodData} />
    </div>
  );
}

export default App;
