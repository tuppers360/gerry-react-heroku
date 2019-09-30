import React, { Component } from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Apply } from "./components/apply";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Stories } from "./components/stories";
import { HolliesStory } from "./components/stories/holliesStory";
import { NoMatch } from "./components/noMatch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <Switch>
            <Route path="/stories/hollies-story" component={HolliesStory} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/stories" component={Stories} />
            <Route path="/apply" component={Apply} />
            <Route path="/" component={Home} />
            <Route component={NoMatch}></Route>
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
