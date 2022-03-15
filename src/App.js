import logo from "./logo.svg";
import "./App.css";
import Home from "./HomePages/Home/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navigation from "./Shared/Navigation/Navigation";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
