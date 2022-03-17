import logo from "./logo.svg";
import "./App.css";
import Home from "./HomePages/Home/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navigation from "./Shared/Navigation/Navigation";
import Login from "./HomePages/Login/Login";
import Register from "./HomePages/Register/Register";
import Footer from "./Shared/Footer/Footer";
import AuthProvider from "./Components/Context/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
