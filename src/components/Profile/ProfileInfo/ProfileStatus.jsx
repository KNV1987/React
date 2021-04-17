import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import c from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component {
  // if(!props.profile){
  //   return <Preloader />
  // }
  
  state = {
    editMode: false, // показывает либо статус,  либо возм изменить статутс
    status: this.props.status
  }

  activateEditMode() {
      this.setState( {
      editMode: true
    });
  }
  deactivateEditMode() {
      this.setState( {
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (e) => {
      this.setState( {
      status: e.currentTarget.value
    });
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
      console.log('componentDidUpdate')
  }
  render() {
    console.log('render')
    return (
      <div>
        {!this.state.editMode &&
          <div>
              <span onDoubleClick = {this.activateEditMode.bind(this)} >{this.props.status || 'No status'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus = {true} onBlur = {this.deactivateEditMode.bind(this)} 
            value={this.state.status}/>
          </div>
        }
      </div>
    );
  }
};

export default ProfileStatus;
