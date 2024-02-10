import classNames from "classnames";
import returnImg from "../../../assets/returnScreen.png";
import styles from "../Footer.module.css";
const FooterMiscell = () => {
  return (
    <div>
      <img src={returnImg} alt="" className={classNames(styles.returnImg)} />
    </div>
  );
};

export default FooterMiscell;
