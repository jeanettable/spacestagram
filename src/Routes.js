import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from './App';
import SingleImgView from './SingleImgView';

const Routes = () => {
    return (
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/:id" component={SingleImgView} />
            {/* <Route path="*" component={FourOhFour} /> */}
          </Switch>
        </main>
      </Router>)
    }

export default Routes;
