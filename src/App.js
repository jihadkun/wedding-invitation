import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import EditPage from "./Component/EditPage/EditPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/edit" component={EditPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
