import React, { Component } from "react";
import ScrollToTop from "./components/scrollToTop";
import { Route, Switch } from "react-router-dom";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import { About } from "./pages/about/about.component";
import { Application } from "./pages/application/application.component";
import { Contact } from "./pages/contact/contact";
import Donate from "./pages/donate/donate.component";
import Payment from "./pages/payment/payment.component";
import { Footer } from "./components/footer/footer.component";
import { Stories } from "./components/stories/stories";
import { HolliesStory } from "./components/stories/holliesStory/holliesStory";
import { NoMatch } from "./components/noMatch";
import "./App.scss";
import { Home } from "./pages/home/home.component";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="layout-container">
          <NavigationBar />
          <ScrollToTop>
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
            <Footer />
          </ScrollToTop>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
