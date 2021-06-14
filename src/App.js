import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import FindPet from "./components/FindPet/FindPet";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Vetpage from "./components/Vetpage/Vetpage";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <div className="overlay">
        <Provider store={store}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/find-pet" component={FindPet} />
              <Route exact path="/vet-services" component={Vetpage} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </Router>
        </Provider>
      </div>
    </div>
  );
};

export default App;
