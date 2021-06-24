// import * as firebase from "firebase";
// import "firebase/firestore";
// import { getCurrentUser } from "../API/index";

// export const MODULE_NAME = "user";

// export const selectUserData = (state) => state[MODULE_NAME].usersData;

// const SET_CURRENT_USER = "SET_CURRENT_USER";

// export const setCurrentUser = (payload) => ({
//   type: SET_CURRENT_USER,
//   payload,
// });

// const initialState = {
//   usersData: {},
// };

// *********************** */
// export function usersReducer(state = initialState, { type, payload }) {
//   switch (type) {
//     case SET_CURRENT_USER:
//       return {
//         ...state,
//         usersData: payload,
//       };
//     default:
//       return state;
//   }
// }

// ******************************* */

// export const getCurrentUserData = (mail) => async (dispatch) => {
//   try {
//     const userData = await getCurrentUser(mail);
//     dispatch(setCurrentUser(userData));
//   } catch (error) {
//     console.log("getCurrentUser", error);
//   }
// };
