// import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Collection from "./pages/Collection";
import Snippet from "./pages/Snippet";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('user') ? (
          <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

function App() {
  return (
    <div>
      
    <Router>

      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/profile" component={Profile} /> */}
          <PrivateRoute path="/profile/:id" component={Profile} />
          <Route path="/collection/:id" component={Collection} />
          <Route path="/snippet/:id" component={Snippet} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer />

    </Router>
    </div>
    
  );
}

export default App;
