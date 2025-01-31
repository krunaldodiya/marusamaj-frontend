import { TOGGLE_DRAWER } from "../actions";

const initialState = {
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER: {
      return {
        ...state,
        isOpen: action.payload.isOpen
      };
    }

    default:
      return state;
  }
};
