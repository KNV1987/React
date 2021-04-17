import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
  return <div>
    <Paginator onPageSize={props.onPageSize}
      currentPage={props.currentPage}
      onPageChanged={props.onPageChanged}
      onFinishPageSize={props.onFinishPageSize}
      startPageSize={props.startPageSize}
      finishPageSize={props.finishPageSize}
      onPageSize={props.onPageSize}
    />

    {props.users.map(u => <User user={u}
      folowingInProgress={props.folowingInProgress}
      unfollow={props.unfollow}
      follow={props.follow}
      key={u.id} />)
    }
  </div>

};

export default Users;
