import React, { useEffect } from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from '../redux/store';
import KappAccordion from './KappAccordion/KappAccordion';
import { useSelector, useDispatch } from '../redux/hooks/hooks';
import FormsContainer from './FormsContainer/FormsContainer';

export const HomeComponent = props => {
  const kapps = useSelector(store => store.app.kapps);

  return (
    <div className="page-container">
      <div className="page-panel">
        <div className="p-5 text-center">
          <h1>Welcome to the Scaffold Package!</h1>
          <p>This is the home page.</p>
          <FormsContainer />
          <KappAccordion kapps={kapps} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  appLocation: state.app.location,
});

const mapDispatchToProps = {};

export const Home = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {},
  }),
)(HomeComponent);
