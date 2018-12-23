import {
  ADD_RELATION,
  ADD_RELATION_FAIL,
  ADD_RELATION_SUCCESS,
  CHANGE_AVATAR,
  GET_AUTH_USER,
  GET_AUTH_USER_FAIL,
  GET_AUTH_USER_SUCCESS,
  SET_AUTH_USER,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_SUCCESS
} from "../actions";

const initialState = {
  authUser: null,
  errors: null,
  loading: false,
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_USER: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case GET_AUTH_USER_SUCCESS: {
      return {
        ...state,
        authUser: action.payload.authUser,
        errors: null,
        loading: false,
        loaded: true
      };
    }

    case GET_AUTH_USER_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        loading: false,
        loaded: true
      };
    }

    case UPDATE_USER_PROFILE: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case UPDATE_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        authUser: action.payload.authUser,
        errors: null,
        loading: false,
        loaded: true
      };
    }

    case UPDATE_USER_PROFILE_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        loading: false,
        loaded: true
      };
    }

    case ADD_RELATION: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case ADD_RELATION_SUCCESS: {
      return {
        ...state,
        authUser: action.payload.authUser,
        errors: null,
        loading: false,
        loaded: true
      };
    }

    case ADD_RELATION_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        loading: false,
        loaded: true
      };
    }

    case SET_AUTH_USER: {
      return {
        ...state,
        authUser: action.payload.authUser
      };
    }

    case CHANGE_AVATAR: {
      return {
        ...state,
        authUser: action.payload.authUser
      };
    }

    default:
      return state;
  }
};
