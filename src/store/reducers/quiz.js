import { LOAD_QUIZ, LOAD_QUIZ_SUCCESS, LOAD_QUIZ_FAIL } from "../actions";

const initialState = {
  data: [],
  errors: null,
  loading: false,
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_QUIZ: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case LOAD_QUIZ_SUCCESS: {
      return {
        ...state,
        data: action.payload.quiz,
        errors: null,
        loading: false,
        loaded: true
      };
    }

    case LOAD_QUIZ_FAIL: {
      return {
        ...state,
        data: [],
        errors: action.payload.errors,
        loading: false,
        loaded: true
      };
    }

    default:
      return state;
  }
};
