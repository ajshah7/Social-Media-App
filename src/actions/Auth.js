import { LOGGED_USER, USER_LOGIN } from "../actions/Types";
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

