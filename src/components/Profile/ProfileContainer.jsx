
import React from "react";
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redax/profile-reducer";
import { connect } from 'react-redux';
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";




class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
  }
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }


  render() {

    return (
      < Profile {...this.props} isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        savePhoto={this.props.savePhoto}
        updateStatus={this.props.updateStatus}
        saveProfile={this.props.saveProfile} />
    );
  };
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,

})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)