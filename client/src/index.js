import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import store from './app/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Landing} from "./components/landing/Landing";
import {Home} from "./components/home/Home";
import {Counter} from "./components/counter/Counter";
import Header from "./components/header/Header";
import {Container} from "semantic-ui-react";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        store.getState().auth.loggedIn
            ? <Component {...props} />
            : <Redirect to='/'/>
    )}/>
);

ReactDOM.render(
    <Fragment>
      {/*<React.StrictMode>*/}
      <Provider store={store}>
        <Router>
          <Container>
            {store.getState().auth.loggedIn ?
                <Route>
                  <Header/>
                  <Switch>
                    <PrivateRoute exact path="/counter" component={Counter}/>
                    <PrivateRoute path="*" component={Home}/>
                  </Switch>
                </Route>
                :
                <Route path="*" component={Landing}/>
            }
          </Container>
        </Router>
      </Provider>
      {/*</React.StrictMode>,*/}
    </Fragment>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
