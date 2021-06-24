// import * as firebase from "firebase";
// import "firebase/firestore";
import { SignUp, SignIn } from "../API/index";

const SET_AUTH_SUCCESS = "SET_AUTH_SUCCESS";
const SET_AUTH_LOGOUT = "SET_AUTH_LOGOUT";
const SET_AUTH_PHOTO = "SET_AUTH_PHOTO";
const SET_AUTH_ERROR = "SET_AUTH_ERROR";

export const MODULE_NAME = "auth";
export const selectAuthStatus = (state) => state[MODULE_NAME].status;
//export const selectAuthUserID = (state) => state[MODULE_NAME].userID;
export const selectAuthUsername = (state) => state[MODULE_NAME].username;
export const selectAuthPhoto = (state) => state[MODULE_NAME].photo;
export const selectAuthUser = (state) => state[MODULE_NAME].user;
export const selectAuthMail = (state) => state[MODULE_NAME].mail;
export const selectAuthToken = (state) => state[MODULE_NAME].token;
export const selectAuthError = (state) => state[MODULE_NAME].authError;

// ACTION CREATORS
export const setAuthSuccess = (payload) => ({
  type: SET_AUTH_SUCCESS,
  payload,
});
export const setAuthError = (payload) => ({
  type: SET_AUTH_ERROR,
  payload,
});
export const setAuthPhoto = (payload) => ({
  type: SET_AUTH_PHOTO,
  payload,
});
export const setAuthLogout = () => ({
  type: SET_AUTH_LOGOUT,
});

const initialState = [
  {
    status: false,
    // userID: null,
    username: null,
    // photo: null,
    mail: null,
    user: null,
    token: null,
    authError: null,
  },
];
//*************************** */
export function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_AUTH_SUCCESS:
      return {
        ...state,
        status: true,
        // userID: payload.userID,
        //username: payload.username,
        mail: payload.mail,
        user: payload.user,
        token: payload.token,
      };
    case SET_AUTH_ERROR:
      return {
        ...state,

        status: false,
        authError: payload.error,
      };
    case SET_AUTH_LOGOUT:
      return {
        ...state,
        status: false,
        // userID: null,
        username: null,
        mail: null,
        token: null,
        user: null,
      };
    // case SET_AUTH_PHOTO:
    //   return {
    //     ...state,
    //     photo: payload,
    //   };
    default:
      return state;
  }
}

//******************************** */
export const signupUser = (userDetails) => async (dispatch) => {
  const { username, email, password } = userDetails;

  try {
    const user = await SignUp(username, email, password);

    if (user) {
      dispatch(
        setAuthSuccess({
          user: user.data,
          token: user.data.token,
          mail: user.data.email,
        })
      );
    } else console.log("Something went wrong with getting UserData. ");
  } catch (error) {
    console.log("SignUp error", error);
  }
};

//************************************************* */
export const signIn = (userDetails) => async (dispatch) => {
  const { email, password } = userDetails;

  try {
    const user = await SignIn(email, password);

    if (user.data && user.token) {
      dispatch(
        setAuthSuccess({
          user: user.data,
          token: user.token,
          mail: user.data.email,
        })
      );
    } else {
      dispatch(
        setAuthError({
          error: user.error,
        })
      );
      setTimeout(() => {
        dispatch(
          setAuthError({
            error: null,
          })
        );
      }, 5000);
    }
  } catch (error) {
    console.log("SignIn error", error);
  }
};

//************************************ */
export const logOut = () => async (dispatch) => {
  try {
    dispatch(setAuthLogout());
  } catch (error) {
    console.log("signOut error", error.message);
  }
};
