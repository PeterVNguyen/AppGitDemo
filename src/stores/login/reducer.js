import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILED
} from "./type";
const INIT_STATE = {
  email: "",
  password: "",
  messenger: "",
  user: undefined
};
export default (state = INIT_STATE, action) => {
  switch (((state = INIT_STATE), action)) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    case REQUEST_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        password: "",
        messenger: "Success Login!!"
      };
    case REQUEST_LOGIN_FAILED:
      return {
        ...state,
        user: undefined,
        email: "",
        password: "",
        messenger: "Login failed, try again!"
      };
    default:
      return state;
  }
};
