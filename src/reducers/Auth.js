import { USER_LOGIN, LOGGED_USER } from "../actions/Types";
import data from "../data";

const initialState = {
  user: data.user,
  loggedUser: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN:
      return { user: [payload, ...state.user] };
    case LOGGED_USER:
      return { ...state, loggedUser: payload };
    default:
      return state;
  }
}
