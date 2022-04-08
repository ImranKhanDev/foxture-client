import logo from "./logo.svg";
import "./App.css";
import Home from "./HomePages/Home/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AppBar from "./Shared/AppBar/AppBar";
import Login from "./HomePages/Login/Login";
import Register from "./HomePages/Register/Register";
import Footer from "./Shared/Footer/Footer";
import AuthProvider from "./Components/Context/AuthProvider";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Dashboard from "./Components/Dashboard/Dashboard";
import Admin from "./Components/Dashboard/Admin/Admin";
import AddProduct from "./Components/Dashboard/AddProduct/AddProduct";
import PrivateRoute from "./Components/Private/PrivateRoute/PrivateRoute";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute exact path="/shop">
            <Shop />
          </PrivateRoute>

          <PrivateRoute exact path="/productDetails/:id">
            <ProductDetails />
          </PrivateRoute>

          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
