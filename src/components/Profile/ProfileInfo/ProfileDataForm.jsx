import React from "react"
import { Field, reduxForm } from "redux-form"
import c from "./ProfileInfo.module.css";
import { Input, Textarea } from "../../Common/FormsControls/FormsControls"
import style from "../../Common/FormsControls/FormsControls.module.css"


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>{error} </div>}
        <div>
            <b>Full name: </b> <Field placeholder={'Full name'} name={'fullName'} component={Input} />
        </div>
        <div>
            <b>Looking for a job: </b>
            <Field type={'checkbox'} name={'lookingForAJob'} component={Input} />
        </div>
        <div>
            <b>My professional skills: </b>
            <Field placeholder={'Professional skills'} name={'lookingForAJobDescription'} component={Textarea} />
        </div>

        <div>
            <b>About my: </b>
            <Field placeholder={'About me'} name={'aboutMe'} component={Input} />
        </div>

        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div className={c.contact} >
                    <b>{key}: <Field placeholder={key} name={'contacts.' + key} component={Input} validate={[]} /></b>
                </div>
            })}
        </div>

    </form>
}


const ProfileDataFormRedaxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)
export default ProfileDataFormRedaxForm