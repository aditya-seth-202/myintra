import classNames from "classnames";
import styles from "./Login.module.css";
import loginCoupon from "../../assets/loginCoupon.png";
import Form from "./components/Form";
import { GoogleLogin } from "react-google-login";
import { URLS } from "../../constants/url";
import { STATIC_STRINGS } from "../../constants/stringConstants";
const Login = () => {
  const googleStyles = {
    margin: "24px",
    padding: "24px",
  };
  return (
    <div className={classNames(styles.mainCont)}>
      <div className={classNames(styles.contentDiv)}>
        <img src={loginCoupon} alt="" />
        <div className={classNames(styles.formCont)}>
          <Form />
          <div className={classNames(styles.orSeperator)}>or</div>
          <div className={classNames(styles.googleAuthCont)}>
            <GoogleLogin
              clientId={URLS?.GOOGLE.GOOGLE_CLIENTID}
              buttonText="Login"
              onSuccess={() => {}}
              onFailure={() => {}}
              isSignedIn={true}
              cookiePolicy="single_host_origin"
              style={googleStyles}
            />
          </div>

          <div className={classNames(styles.policyAgree)}>
            <span className={classNames(styles.policyAgreeGrey)}>
              {STATIC_STRINGS.LOGIN.POLICY_TXT.BY_AGREE}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
