import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from "../actions";

const initialState = {
  data: [],
  page: 1,
  last_page: null,
  total: null,
  filters: {
    keywords: null,
    father_city: null,
    mother_city: null,
    gender: "Any",
    marital_status: "Any"
  },
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
      const { users } = action.payload;

      return {
        ...state,
        data: [...state.data, ...users.data],
        last_page: users.last_page,
        total: users.total,
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
