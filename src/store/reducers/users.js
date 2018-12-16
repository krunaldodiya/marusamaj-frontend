import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from "../actions";

const initialState = {
  data: [],
  errors: null,
  loading: false,
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case GET_USERS_SUCCESS: {
      return {
        ...state,
        data: action.payload.users,
        loading: false,
        loaded: true
      };
    }

    case GET_USERS_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        data: [],
        loading: false,
        loaded: true
      };
    }

    default:
      return state;
  }
};
