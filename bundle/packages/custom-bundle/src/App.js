import React from 'react';
import { Router, Redirect } from '@reach/router';
import { compose, lifecycle } from 'recompose';
import { connect } from './redux/store';

const DummyHome = props => (
  <div className="container">
    <h1>Welcome to the Portal!</h1>
    <p>This is the home page.</p>
    <h2>HELLO WORLD</h2>
  </div>
);

const DummySidebar = props => (
  <div className="sidebar">
    <h4>Sidebar</h4>
    <p>This is the sidebar.</p>
  </div>
);

const DummyPublicHome = props => (
  <div className="container">
    <h1>Welcome to the Portal!</h1>
    <p>You should log in.</p>
  </div>
);

export const AppComponent = props => {
  return props.render({
    sidebar: (
      <Router>
        <DummySidebar path="*" />
      </Router>
    ),
    main: (
      <div className="package-layout package-layout--portal">
        <Router>
          <DummyHome path="/" />
        </Router>
      </div>
    ),
  });
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};
export const App = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    // componentDidMount() {},
  }),
)(AppComponent);

export const PublicAppComponent = props => {
  return props.render({
    main: (
      <div className="package-layout package-layout--portal">
        <Router>
          <DummyPublicHome path="/" />
          <Redirect from="*" to={props.authRoute} noThrow />
        </Router>
      </div>
    ),
  });
};
const mapStateToPropsPublic = state => ({
  authRoute: state.app.authRoute,
});
export const PublicApp = compose(
  connect(mapStateToPropsPublic),
  lifecycle({
    // componentDidMount() {},
  }),
)(PublicAppComponent);
