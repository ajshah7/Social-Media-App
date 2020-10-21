import { USER_LOGIN, USER_LOGOUT } from "../actions/Types";

const initialState = {
  user: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN:
      return { user: payload };
    case USER_LOGOUT:
      return { user: {} };
    default:
      return state;
  }
}
