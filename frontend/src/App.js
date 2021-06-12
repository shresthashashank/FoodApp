import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Blogpage from "./pages/BlogPage";
import Register from "./components/Register";
import ProfilePage from "./pages/ProfilePage";

import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import CartPage from "./pages/CartPage";
import RestaurantDetails from "./components/RestaurantDetails";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/auth/login" component={Auth} exact />
          <Route path="/main/blog" component={Blogpage} exact />
          <Route path="/auth/register" component={Register} exact />
          <Route path="/profile" component={ProfilePage} exact />
          <Route path="/main/cart" component={CartPage} exact />
          <Route
            path="/main/restaurants/search/:foodName"
            component={Search}
            exact
          />
          <Route
            path="/main/restaurants/details/:restaurantID"
            component={RestaurantDetails}
            exact
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
