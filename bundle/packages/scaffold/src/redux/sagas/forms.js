import { fetchForms } from '@kineticdata/react';
import { takeLatest } from 'redux-saga/effects';

function* getForms(action) {
  try {
    let response = yield fetchForms({ kappSlug: action.payload });
    console.log('Get Forms Dispatch');
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export function* forms() {
  yield takeLatest('FETCH_FORMS', getForms);
}
