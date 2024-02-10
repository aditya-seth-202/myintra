import classNames from "classnames";
import styles from "../Navbar.module.css";
import { STATIC_STRINGS } from "../../../constants/stringConstants";
const Navlinks = () => {
  return (
    <div className={classNames(styles?.navlinkContainer)}>
      <a className={classNames(styles.navlinks)}>
        {STATIC_STRINGS.NAV_OPTIONS?.HOME}
      </a>
      <a className={classNames(styles.navlinks)}>
        {STATIC_STRINGS.NAV_OPTIONS?.MEN}
      </a>
      <a className={classNames(styles.navlinks)}>
        {STATIC_STRINGS.NAV_OPTIONS?.WOMEN}
      </a>
    </div>
  );
};

export default Navlinks;
