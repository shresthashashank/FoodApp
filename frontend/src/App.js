import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Blogpage from "./pages/BlogPage";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
// import Profiletest from "./components/Profiletest";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import CartPage from "./pages/CartPage";
import RestaurantDetails from "./components/RestaurantDetails";
import { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  //State variable to check if user is authenticated or not.
  const [isAuth, setisAuth] = useState(false);
  // <Auth data={setisAuth} />;

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />

          <Route
            path="/auth/login"
            component={() => <Auth data={setisAuth} />}
            exact
          />
          {console.log(isAuth)}
          <ProtectedRoute
            path="/profile"
            component={() => <Profile status={isAuth} />}
            isAuth={isAuth}
            exact
          />
          <ProtectedRoute
            path="/main/cart"
            component={CartPage}
            isAuth={isAuth}
            exact
          />

          <Route path="/main/blog" component={Blogpage} exact />
          <Route path="/auth/register" component={Register} exact />
          {/* <Route path="/profiles" component={ProfilePage} exact /> */}
          {/* <Route path="/main/cart" component={CartPage} exact /> */}
          <Route
            path="/main/restaurants/search/:foodName"
            component={() => <Search status={isAuth} />}
            exact
          />
          <Route
            path="/main/restaurants/details/:restaurantID"
            component={() => <RestaurantDetails loggedInStatus={isAuth} />}
            exact
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
