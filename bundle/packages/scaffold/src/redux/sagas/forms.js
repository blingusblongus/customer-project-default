import { fetchForm } from '@kineticdata/react';
import { takeLatest } from 'redux-saga/effects';

function* getForms() {
  try {
    // let response = fetchForm
    console.log('Get Forms Dispatch');
  } catch (err) {
    console.log(err);
  }
}

export function* forms() {
  yield takeLatest('FETCH_FORM', getForms);
}
