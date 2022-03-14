import React, { useEffect } from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from '../redux/store';
// import { fetchKapp } from '@kineticdata/react';
import { createSelectorHook } from 'react-redux';
import { context } from '../redux/store';
import KappAccordion from './KappAccordion/KappAccordion';

export const HomeComponent = props => {
  const useSelector = createSelectorHook(context);
  const kapps = useSelector(store => store.app.kapps);

  // Testing KineticLib util
  // useEffect(() => {
  //   const getKapp = async () => {
  //     let response = await fetchKapp({ kappSlug: 'sandbox' });
  //     console.log(response);
  //   };
  //   getKapp();
  // }, []);

  return (
    <div className="page-container">
      <div className="page-panel">
        <div className="p-5 text-center">
          <h1>Welcome to the Scaffold Package!</h1>
          <p>This is the home page.</p>
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
