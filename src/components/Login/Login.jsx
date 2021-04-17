import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { required } from "../utils/validators";
import { login } from "../../redax/auth -reducer"
import { Redirect } from "react-router-dom";
import style from "../Common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} captchaUrl={props.captchaUrl}>
      <div>
        <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]} />
      </div>
      <div>
        <Field type={'Password'} placeholder={'Password'} name={'password'} component={Input} validate={[required]} />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={Input} />Remember me
        </div>
      {props.error && <div className={style.formSummaryError}>{props.error} </div>}
      {props.captchaUrl && <img src={props.captchaUrl} styleName={style.captcha}/>}
      {props.captchaUrl && <Field type={'Captcha'} placeholder={'Captcha'} name={'captcha'} component={Input} validate={[required]} />}

      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

const LoginRedaxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)


const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (<div>
    <h1>LOGIN</h1>
    <LoginRedaxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
  </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
