import React, { useState } from "react";
import Preloader from "../../Common/Preloader/Preloader";
import c from "./ProfileInfo.module.css";
import ProfileStatuWithHooks from "./ProfileStatusWithHooks";
import usersPhoto from '../../../assets/imeges/user.png'
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  const [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData)
      .then(() => {
        setEditMode(false);
      })

  }
  return (
    <div className={c.divProf}>
      <img src={profile.photos.large || usersPhoto} className={c.avaProf} />
      {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

      {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> :
        <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />}

      <ProfileStatuWithHooks status={status} updateStatus={updateStatus} />
    </div>

  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div>
      <b>Full name: </b> {profile.fullName}
    </div>
    <div>
      <b>Looking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>Professional skills: </b> {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me: </b> {profile.aboutMe}
    </div>
    <div>
      <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} ContactTitle={key} ContactValue={profile.contacts[key]} />
      })}
    </div>

  </div>
}

const Contact = ({ ContactTitle, ContactValue }) => {
  return <div className={c.contact}><b>{ContactTitle}: </b> {ContactValue}</div>
}
export default ProfileInfo;
