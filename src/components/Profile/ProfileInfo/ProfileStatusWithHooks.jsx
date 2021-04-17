import React, { useEffect, useState } from "react";
import Preloader from "../../Common/Preloader/Preloader";
import c from "./ProfileInfo.module.css";


const ProfileStatuWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }
  return (
    <div>
      {!editMode &&
        <div>
          <b>Status: </b><span onDoubleClick={activateEditMode} >{props.status || 'No status'} </span>
        </div>
      }
      {
        editMode &&
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
            value={status} />
        </div>
      }
    </div >
  );
};

export default ProfileStatuWithHooks;
