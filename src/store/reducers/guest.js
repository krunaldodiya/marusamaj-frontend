import {
  GET_GUEST_USER,
  GET_GUEST_USER_FAIL,
  GET_GUEST_USER_SUCCESS
} from "../actions";

const initialState = {
  guestUser: null,
  errors: null,
  loading: false,
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GUEST_USER: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case GET_GUEST_USER_SUCCESS: {
      return {
        ...state,
        authUser: action.payload.authUser,
        errors: null,
        loading: false,
        loaded: true
      };
    }

    case GET_GUEST_USER_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        loading: false,
        loaded: true
      };
    }

    default:
      return state;
  }
};
