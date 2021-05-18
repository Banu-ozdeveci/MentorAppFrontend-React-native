import * as firebase from "firebase";
import "firebase/firestore";

import {
  getData,
  getUniMajorData,
  getOnlineMentorsData,
  getWeekFavData,
  getRecommendedData,
  getRanking,
} from "../API/index";

const SET_APP_MENTORS = "SET_APP_MENTORS";
const SET_APP_UNIMAJOR = "SET_APP_UNIMAJOR";
const SET_APP_ONLINEMENTORS = "SET_APP_ONLINEMENTORS";
const SET_APP_WEEKFAVMENTORS = "SET_APP_WEEKFAVMENTORS";
const SET_APP_RECOMMENDEDMENTORS = "SET_APP_RECOMMENDEDMENTORS";
const SET_CURRENT_MENTOR = "SET_CURRENT_MENTOR";
const SET_RANKING = "SET_RANKING";
//*********** */
export const MODULE_NAME = "mentors";

export const selectAllMentorData = (state) => state[MODULE_NAME].allMentors;
export const selectUniMajorData = (state) => state[MODULE_NAME].uniMajor;
export const selectOnlineMentorData = (state) =>
  state[MODULE_NAME].onlineMentors;
export const selectFavMentorsData = (state) => state[MODULE_NAME].favMentors;

export const selectRecommendedMentorsData = (state) =>
  state[MODULE_NAME].recommendedMentors;
export const selectCurrentMentor = (state) => state[MODULE_NAME].currentMentor;
export const selectRankingData = (state) => state[MODULE_NAME].ranking;

const initialState = {
  allMentors: [],
  uniMajor: [],
  onlineMentors: [],
  favMentors: [],
  recommendedMentors: [],
  currentMentor: [],
  ranking: [],
};

//REDUCER */

export function mentorsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_APP_MENTORS:
      return {
        ...state,
        allMentors: payload,
      };
    case SET_APP_UNIMAJOR:
      return {
        ...state,
        uniMajor: payload,
      };

    case SET_APP_ONLINEMENTORS:
      return {
        ...state,
        onlineMentors: payload,
      };

    case SET_APP_WEEKFAVMENTORS:
      return {
        ...state,
        favMentors: payload,
      };
    case SET_APP_RECOMMENDEDMENTORS:
      return {
        ...state,
        recommendedMentors: payload,
      };
    case SET_CURRENT_MENTOR:
      return {
        ...state,
        currentMentor: payload,
      };
    case SET_RANKING:
      return {
        ...state,
        currentMentor: payload,
      };
    default:
      return state;
  }
}
//ACTIONS
//*************************** */

export const setAppMentors = (payload) => ({
  type: SET_APP_MENTORS,
  payload,
});

export const setAppUniMajor = (payload) => ({
  type: SET_APP_UNIMAJOR,
  payload,
});

export const setOnlineMentors = (payload) => ({
  type: SET_APP_ONLINEMENTORS,
  payload,
});

export const setWeekFavMentors = (payload) => ({
  type: SET_APP_WEEKFAVMENTORS,
  payload,
});
export const setRecommendedMentors = (payload) => ({
  type: SET_APP_RECOMMENDEDMENTORS,
  payload,
});
export const setCurrentMentor = (payload) => ({
  type: SET_CURRENT_MENTOR,
  payload,
});
export const setRanking = (payload) => ({
  type: SET_RANKING,
  payload,
});
//FONCTIONS

export const getAllData = () => async (dispatch) => {
  try {
    const allMentors = await getData();
    dispatch(setAppMentors(allMentors));
  } catch (error) {
    console.log("getAllData", error);
  }
};

export const getUniMajor = (domain, data) => async (dispatch) => {
  try {
    const UniMajorData = await getUniMajorData(domain, data);
    dispatch(setAppUniMajor(UniMajorData));
  } catch (error) {
    console.log("getUniMajorError", error);
  }
};

export const getOnlineMentors = () => async (dispatch) => {
  try {
    const OnlineMentorsData = await getOnlineMentorsData();
    dispatch(setOnlineMentors(OnlineMentorsData));
  } catch (error) {
    console.log("getOnlineMentors", error);
  }
};

export const getFavMentors = () => async (dispatch) => {
  try {
    const FavMentorsData = await getWeekFavData();
    dispatch(setWeekFavMentors(FavMentorsData));
  } catch (error) {
    console.log("getFavMentors", error);
  }
};

export const getRecommendedMentors = (uni, major) => async (dispatch) => {
  try {
    const MentorsData = await getRecommendedData(uni, major);
    dispatch(setRecommendedMentors(MentorsData));
  } catch (error) {
    console.log("getRecommendedMentors", error);
  }
};

export const getCurrentMentor = (mentorID) => async (dispatch) => {
  try {
    firebase
      .firestore()
      .collection("mentors")
      .doc(mentorID)
      .onSnapshot(function (doc) {
        dispatch(setCurrentMentor(doc.data()));
      });
  } catch (e) {
    console.log("getCurrentMentor error", e);
  }
};

export const getRankingData = (min, max) => async (dispatch) => {
  try {
    const MentorsData = await getRanking(min, max);
    dispatch(setRanking(MentorsData));
  } catch (error) {
    console.log("getRankingData", error);
  }
};
