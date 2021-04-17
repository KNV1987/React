import React from 'react';
import { connect } from 'react-redux';
import { getUsers, toggleIsfolowingProgress, follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, setStartPageSize, setFinishPageSize, toggleIsFetching } from "../../redax/users-reducer";
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';
import { getStartPageSize, getPageSize, getUsersSelect, getTotalUsersCount, getCurrentPage, getFolowingInProgress, getIsFetching, getFinishPageSize, } from '../../redax/users-selectors';

class UsersContener extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNamber) => {
    const { pageSize } = this.props;
    this.props.getUsers(pageNamber, pageSize);
  }

  onPageSize = () => {
    let n = this.props.startPageSize - 10;
    this.props.setStartPageSize(n);
    let s = this.props.finishPageSize - 10;
    this.props.setFinishPageSize(s);
  }

  onFinishPageSize = () => {
    let s = this.props.finishPageSize + 10;
    this.props.setFinishPageSize(s);
    let n = this.props.startPageSize + 10;
    this.props.setStartPageSize(n);
  }
  render() {
    return <>
      { this.props.isFetching ? <Preloader /> : null}
      < Users startPageSize={this.props.startPageSize}
        finishPageSize={this.props.finishPageSize}
        onPageSize={this.onPageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        onFinishPageSize={this.onFinishPageSize}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        toggleIsfolowingProgress={this.props.toggleIsfolowingProgress}
        folowingInProgress={this.props.folowingInProgress}
      />
    </>
  }
}




let mapStateToProps = (state) => {
  return {
    users: getUsersSelect(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    startPageSize: getStartPageSize(state),
    finishPageSize: getFinishPageSize(state),
    isFetching: getIsFetching(state),
    folowingInProgress: getFolowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setStartPageSize,
    setFinishPageSize,
    toggleIsFetching,
    toggleIsfolowingProgress,
    getUsers
  })
)(UsersContener)