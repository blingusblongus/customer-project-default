import React, { useEffect } from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from '../redux/store';
import { fetchKapp } from '@kineticdata/react';
import { createSelectorHook, createStoreHook } from 'react-redux';
import { context } from '../redux/store';

export const HomeComponent = props => {
  const useSelector = createSelectorHook(context);
  const data = useSelector(store => store);
  console.log(data);
  console.log('scaffold loaded');
  // const data = useSelector(store=>store)
  // console.log(st)
  console.log(props);

  useEffect(() => {
    console.log('scaffold mounted');
    // console.log(data);
    const getKapp = async () => {
      let response = await fetchKapp({ kappSlug: 'sandbox' });
      console.log(response);
    };

    getKapp();
  }, []);

  return (
    <div className="page-container">
      <div className="page-panel">
        <div className="p-5 text-center">
          <h1>Welcome to the Scaffold Package!</h1>
          <p>This is the home page.</p>
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
