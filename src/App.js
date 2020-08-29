import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import Hops from "./components/hops/Hops";
import HopDetails from "./components/hops/HopDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={"/"} component={Dashboard} />
          <Route exact path={"/hops"} component={Hops} />
          <Route exact path={"/hops/:id"} component={HopDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
