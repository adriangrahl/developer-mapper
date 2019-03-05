import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Creators as UserActions } from '../ducks/users';


export function* addUser(action) {
  
  try {

    const { latitude, longitude } = action.payload.data;
    const { data } = yield call(api.get, action.payload.data.userName);

    const isDuplicated = yield select(status => status.users.data.find(user => user.id === data.id));
    
    if (isDuplicated) {
      
      toast.warn('User duplicated', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar_url: data.avatar_url,
        latitude,
        longitude,
      };

      toast.success('User added successfully', {
        position: toast.POSITION.TOP_RIGHT,
      });
  
      yield put(UserActions.addUserSuccess(userData));
    }
  } catch (err) {
    toast.error('Unable to add user', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
