import classNames from "classnames";
import styles from "../Navbar.module.css";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const NavIconBtns = () => {
  return (
    <div className={classNames(styles.navIconBtns)}>
      <div className={classNames(styles.navIcons)}>
        <CiHeart size={28} />
      </div>
      <div className={classNames(styles.navIcons)}>
        <CiUser size={28} />
      </div>
      <div className={classNames(styles.navIcons)}>
        <IoBagOutline size={28} />
      </div>
    </div>
  );
};

export default NavIconBtns;
