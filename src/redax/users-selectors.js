export const getUsersSelect = (state) => {
  return state.usersPage.users;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getStartPageSize = (state) => {
  return state.usersPage.startPageSize;
};
export const getFinishPageSize = (state) => {
  return state.usersPage.finishPageSize;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getFolowingInProgress = (state) => {
  return state.usersPage.folowingInProgress;
};


