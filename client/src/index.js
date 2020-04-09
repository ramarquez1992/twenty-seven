import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Landing} from "./components/landing/Landing";
import {Home} from "./components/home/Home";
import {Counter} from "./components/counter/Counter";
import Header from "./components/header/Header";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        store.getState().auth.currentUser
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
);

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          {store.getState().auth.currentUser ?
              <Route>
                <Header/>
                <Switch>
                  <PrivateRoute exact path="/counter" component={Counter} />
                  <PrivateRoute path="*" component={Home} />
                </Switch>
              </Route>
              :
              <Route path="*" component={Landing} />
          }
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
