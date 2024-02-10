import classNames from "classnames";
import UseInput from "../../TextInput/TextInput";
import styles from "../Navbar.module.css";
const NavSearchBar = () => {
  return (
    <div className={classNames(styles?.navSearchContainer)}>
      <UseInput placeholder="Search for products, brands and more" className={classNames(styles?.searchInput)}/>
    </div>
  );
};

export default NavSearchBar;
