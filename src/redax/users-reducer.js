import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../components/utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const START_PAGE_SIZE = "START_PAGE_SIZE";
const PAGE_SIZE_FINISH = "PAGE_SIZE_FINISH";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLOWING_PROGRESS = "TOGGLE_IS_FOLOWING_PROGRESS";

let initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 10,
  currentPage: 1,
  startPageSize: 1,
  finishPageSize: 10,
  isFetching: false,
  folowingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_USERS_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case START_PAGE_SIZE: {
      return { ...state, startPageSize: action.startPageSize };
    }
    case PAGE_SIZE_FINISH: {
      return { ...state, finishPageSize: action.finishPageSize };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLOWING_PROGRESS: {
      return {
        ...state,
        folowingInProgress: action.isFetching
          ? [...state.folowingInProgress, action.userId]
          : state.folowingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  count: totalUsersCount,
});

export const setStartPageSize = (startPageSize) => ({
  type: START_PAGE_SIZE,
  startPageSize,
});
export const setFinishPageSize = (finishPageSize) => ({
  type: PAGE_SIZE_FINISH,
  finishPageSize,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsfolowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  actionCreator,
  apiMethod
) => {
  dispatch(toggleIsfolowingProgress(true, userId));
  const response = await apiMethod(userId);

  if (response.data.resultCode == 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsfolowingProgress(false, userId));
};

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      followSuccess,
      usersAPI.follow.bind(usersAPI)
    );
  };
};
export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      unfollowSuccess,
      usersAPI.unfollow.bind(usersAPI)
    );
  };
};

export default usersReducer;
