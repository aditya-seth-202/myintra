import classNames from "classnames";
import styles from "./Footer.module.css";
import FooterLinkList from "./components/FooterLinkList";
import FooterMedia from "./components/FooterMedia";
import FooterMiscell from "./components/FooterMiscell";
const Footer = () => {
  return (
    <div className={classNames(styles.mainContainer)}>
      <FooterLinkList />
      <FooterMedia />
      <FooterMiscell />
    </div>
  );
};

export default Footer;
