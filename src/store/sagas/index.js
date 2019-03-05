import { all, takeLatest } from 'redux-saga/effects';

import { addUser } from './users';

import { Types } from '../ducks/users';

export default function* rootSaga() {
  yield all([takeLatest(Types.ADD_USER_REQUEST, addUser)]);
}
