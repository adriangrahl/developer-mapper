export const Types = {
  ADD_USER_REQUEST: 'users/ADD_REQUEST',
  ADD_USER_SUCCESS: 'users/ADD_SUCCESS',
  ADD_USER_FAILURE: 'users/ADD_FAILURE',
  REMOVE_USER: 'users/REMOVE',
};

const INITIAL_STATE = {
  data: [],
  adding: false,
};

/**
 * Reducers
 */
export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_SUCCESS:
      return { ...state, data: [...state.data, action.payload.data] };
    case Types.REMOVE_USER:
      return { ...state, data: [...state.data.filter(user => user.id !== action.payload.id)] };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addUserRequest: data => ({
    type: Types.ADD_USER_REQUEST,
    payload: { data },
  }),
  addUserSuccess: data => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { data },
  }),
  addUserFailure: error => ({
    type: Types.ADD_USER_FAILURE,
    payload: { error },
  }),
  removeUser: id => ({
    type: Types.REMOVE_USER,
    payload: { id },
  }),
};
