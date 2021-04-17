import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATE = "auth/SET_USER_DATE";
const GET_CAPTCHA_URL_SECCESS = "auth/GET_CAPTCHA_URL_SECCESS";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATE:
      return {
        ...state,
        ...action.data,
      };
    case GET_CAPTCHA_URL_SECCESS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setAuthUserDate = (id, email, login, isAuth) => ({
  type: SET_USER_DATE,
  data: { id, email, login, isAuth },
});

export const getCaptchaUrlSecces = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SECCESS,
  data: { captchaUrl },
});

export const getAuthUserData = () => {
  return async (dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserDate(id, email, login, true));
    }
  };
};

export const login = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};
export const getCaptchaUrl = () => {
  return async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSecces(captchaUrl));
  };
};

export const logout = () => {
  return async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserDate(null, null, null, false));
    }
  };
};

export default authReducer;
