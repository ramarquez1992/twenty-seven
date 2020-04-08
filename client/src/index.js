import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Counter } from './components/counter/Counter';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

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
        <Route path="/" component={App} />
        <PrivateRoute path="/counter" component={Counter} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
