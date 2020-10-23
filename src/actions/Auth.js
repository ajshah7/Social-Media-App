import { LOGGED_USER, USER_LOGIN, USER_LOGOUT } from "../actions/Types";
import { v4 as uuidv4 } from "uuid";

export const signUp = (email, password, Fullname) => (dispatch) => {
  console.log(email);
  const data = {
    uuid: uuidv4(),
    email: email,
    password: password,
    name: Fullname,
  };

  console.log(data);

  dispatch({ type: USER_LOGIN, payload: data });
};

export const loggedUser = (name, uuid) => (dispatch) => {
  dispatch({ type: LOGGED_USER, payload: { name: name, uuid: uuid } });
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: USER_LOGIN });
};
