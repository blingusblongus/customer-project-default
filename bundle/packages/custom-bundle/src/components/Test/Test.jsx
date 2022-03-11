import React, { useEffect } from 'react';
import { fetchKapp } from '@kineticdata/react';

const Test = () => {
  useEffect(() => {
    console.log('test component mounted');
    console.log('testing fetchKapp');
    console.log(fetchKapp);
    fetchKapp({ kappSlug: 'nick-sandbox' })
      .then(({ kapp }) => {
        console.log('Then Block');
        console.log(kapp);
      })
      .catch(error => console.log(error));
  }, []);

  return <h1>Test Component</h1>;
};

export default Test;
