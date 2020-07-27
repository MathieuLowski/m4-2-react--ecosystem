import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import { items } from "./data";
import ItemDeatails from "./components/ItemDetail";

// !alert! Whatever component gets passed in App must be imported here

const App = (props) => {
  console.log(props);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage items={props.items} />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/items/:itemId">
          <ItemDeatails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
