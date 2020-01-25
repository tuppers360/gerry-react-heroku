import React, { Component } from "react";
import NavigationBar from "./components/navigationbar";
import ScrollToTop from "./components/scrollToTop";
import { Route, Switch } from "react-router-dom";
import { About } from "./components/about";
import { Application } from "./components/application";
import { Contact } from "./components/contact";
import Donate from "./pages/donate/donate.component";
import Payment from "./pages/payment/payment.component";
import { Footer } from "./components/footer";
import { Stories } from "./components/stories/stories";
import { HolliesStory } from "./components/stories/holliesStory/holliesStory";
import { NoMatch } from "./components/noMatch";
import "./App.scss";
import { Home } from "./pages/home/home.component";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <ScrollToTop>
          <main>
            <Switch>
              <Route path="/stories/hollies-story" component={HolliesStory} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/stories" component={Stories} />
              <Route path="/application" component={Application} />
              <Route path="/donate/payment" component={Payment} />
              <Route path="/donate" component={Donate} />
              <Route path="/" component={Home} />
              <Route component={NoMatch}></Route>
            </Switch>
          </main>
          <Footer />
        </ScrollToTop>
      </React.Fragment>
    );
  }
}

export default App;
