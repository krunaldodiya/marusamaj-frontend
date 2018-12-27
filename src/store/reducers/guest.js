import {
  ADD_RELATION_SUCCESS,
  CHANGE_AVATAR,
  GET_GUEST_USER,
  GET_GUEST_USER_FAIL,
  GET_GUEST_USER_SUCCESS,
  RESET_GUEST_USER,
  UPDATE_SETTINGS_SUCCESS
} from "../actions";

const initialState = {
  guestUser: null,
  errors: null,
  loading: false,
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_GUEST_USER: {
      return {
        ...state,
        guestUser: null
      };
    }

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
        guestUser: action.payload.guestUser,
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

    case CHANGE_AVATAR: {
      return {
        ...state,
        guestUser: action.payload.authUser
      };
    }

    case UPDATE_SETTINGS_SUCCESS: {
      return {
        ...state,
        guestUser: action.payload.authUser
      };
    }

    case ADD_RELATION_SUCCESS: {
      return {
        ...state,
        guestUser: action.payload.guestUser
      };
    }

    default:
      return state;
  }
};
