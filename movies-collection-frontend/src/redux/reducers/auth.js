import { SIGNIN, LOGOUT, SUCCESS, REQUEST, FAIL } from "../actions/actionTypes";

const initialState = {
  loading: false,
  data: null,
  accessToken: null
};

const authReducer = (state = initialState, action) => {
  console.log("action", action);

  switch (action.type) {
    case SIGNIN[REQUEST]:
      return {
        ...state,
        loading: true,
      };

    case SIGNIN[SUCCESS]:
      return {
        ...state,
        loading: false,
        data: action?.data,
        accessToken: action?.data?.token
      };

    case SIGNIN[FAIL]:
      return {
        ...state,
        loading: false,
        data: action?.data,
      };

    case LOGOUT[SUCCESS]:
      return { ...initialState };

    default:
      return state;
  }
};

export default authReducer;
