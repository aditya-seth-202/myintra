import classNames from "classnames";
import styles from "./Navbar.module.css";
import Navlinks from "./components/Navlinks";
import myntraLogo from "../../assets/myntra-logo.webp";
import NavIconBtns from "./components/NavIconBtns";
import NavSearchBar from "./components/NavSearchBar";
const Navbar = () => {
  return (
    <div className={classNames(styles.mainContainer)}>
      <div className={classNames(styles.logocontainer)}>
        <img src={myntraLogo} alt="logo" />
      </div>
      <Navlinks />
      <NavSearchBar/>
      <NavIconBtns />
    </div>
  );
};

export default Navbar;
