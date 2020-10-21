import { USER_LOGIN } from "../actions/Types";

export const signUp = (email, password, Fullname) => (dispatch) => {
  console.log(email);
  const data = {
    email: email,
    password: password,
    name: Fullname,
  };

  console.log(data);

  dispatch({ type: USER_LOGIN, payload: data });
};
