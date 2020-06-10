import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./Page/Home";

import WorkPage from "./Page/WorkPage";

import Footer from "./Footer";
import Nav from "./Navigation";

import "../sass/main.scss";

class App extends React.Component {
  state = { navActive: false };
  toggleNav = () => {
    this.setState({ navActive: !this.state.navActive });
  };
  render() {
    return (
      <div className="">
        <HashRouter>
          <div className="container">
            <Nav active={this.state.navActive} onClick={this.toggleNav} />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/work" component={WorkPage} />
            </Switch>
            <Footer />
          </div>
        </HashRouter>
      </div>
    );
  }
}
export default App;
