import classNames from "classnames";
import styles from "../Footer.module.css";
import { STATIC_STRINGS } from "../../../constants/stringConstants";
import storeImg from "../../../assets/appstore.png";
import socialMediaImg from "../../../assets/Screenshot 2024-02-10 at 4.47.26 PM.png";
const FooterMedia = () => {
  return (
    <div className={classNames(styles.mediaMainCont)}>
      <p className={classNames(styles.listLinkHeading)}>
        {STATIC_STRINGS?.FOOTER?.LINK_HEADINGS?.EXPERINCE}
      </p>
      <div>
        <img src={storeImg} alt="" />
      </div>
      <p className={classNames(styles.listLinkHeading)}>
        {STATIC_STRINGS?.FOOTER?.LINK_HEADINGS?.KEEP_IN_TOUCH}
      </p>
      <div>
        <img src={socialMediaImg} alt="" />
      </div>
    </div>
  );
};

export default FooterMedia;
