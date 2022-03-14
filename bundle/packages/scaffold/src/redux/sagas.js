import { all } from 'redux-saga/effects';
import { forms } from './sagas/forms';

// import { watchSample } from './sagas/sample';

export default function*() {
  yield all([
    // watchSample(),
    forms(),
  ]);
}
