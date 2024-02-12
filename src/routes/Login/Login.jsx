import classNames from "classnames";
import styles from "./Login.module.css";
import loginCoupon from "../../assets/loginCoupon.png";
import Form from "./components/Form";
import { GoogleLogin } from "@react-oauth/google";
import { STATIC_STRINGS } from "../../constants/stringConstants";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/loginSlice";
import { useEffect } from "react";
const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      loginUser({ email: "aditya.shethink@gmail.com", password: "1234567890" })
    );
  }, [dispatch]);
  const data = useSelector((state) => state.login);

  return (
    <div className={classNames(styles.mainCont)}>
      <div className={classNames(styles.contentDiv)}>
        <img src={loginCoupon} alt="" />
        <div className={classNames(styles.formCont)}>
          <Form />
          <div className={classNames(styles.orSeperator)}>or</div>
          <div className={classNames(styles.googleAuthCont)}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
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
