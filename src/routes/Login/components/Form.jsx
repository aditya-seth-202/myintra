import classNames from "classnames";
import styles from "../Login.module.css";
import { STATIC_STRINGS } from "../../../constants/stringConstants";
import UseInput from "../../../components/TextInput/TextInput";
import CustomButton from "../../../components/CustomButton/CustomButton";
const Form = () => {
  const buttonSx = { borderRadius: "0", width: "100%" };
  const inputSx = { borderRadius: "0", width: "100%" };
  return (
    <div className={classNames(styles.formMain)}>
      <div className={classNames(styles.formHeading)}>
        <span className={classNames(styles.formLoginHeadCap)}>
          {STATIC_STRINGS.LOGIN.LOGIN}
        </span>
        <span className={classNames(styles.formLoginHeadSmall)}>
          {STATIC_STRINGS.LOGIN.OR}
        </span>
        <span className={classNames(styles.formLoginHeadCap)}>
          {STATIC_STRINGS.LOGIN.SIGNUP}
        </span>
      </div>
      <div className={classNames(styles.mobilInput)}>
        <UseInput placeholder={STATIC_STRINGS.LOGIN.PLACEHOLDER} sx={inputSx} />
      </div>
      <div className={classNames(styles.submitBtn)}>
        <CustomButton sx={buttonSx} lable={STATIC_STRINGS.BUTTON.CONTINUE} />
      </div>
    </div>
  );
};

export default Form;
