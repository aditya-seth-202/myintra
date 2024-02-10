import classNames from "classnames";
import styles from "../Footer.module.css";
import { STATIC_STRINGS } from "../../../constants/stringConstants";
const FooterLinkList = () => {
  const renderKeysAsDivs = (keysObject) => {
    return Object.keys(keysObject).map((key) => (
      <div key={key} className={classNames(styles.listLink)}>
        {keysObject[key]}
      </div>
    ));
  };
  const ListComp = ({ heading, list }) => {
    return (
      <div className={classNames(styles?.listingCont)}>
        <p className={classNames(styles.listLinkHeading)}>{heading}</p>
        <div className={classNames(styles)}>{renderKeysAsDivs(list)}</div>
      </div>
    );
  };
  return (
    <div className={classNames(styles.linkMainCont)}>
      <div className={classNames(styles)}>
        <ListComp
          heading={STATIC_STRINGS?.FOOTER?.LINK_HEADINGS?.ONLINE_SHOPPING}
          list={STATIC_STRINGS?.FOOTER.FOOTER_NAVLINKS_VAR1}
        />
        <ListComp
          heading={STATIC_STRINGS?.FOOTER?.LINK_HEADINGS?.USEFUL_LINKS}
          list={STATIC_STRINGS?.FOOTER.FOOTER_NAVLINKS_VAR2}
        />
      </div>
      <div className={classNames(styles)}>
        <ListComp
          heading={STATIC_STRINGS?.FOOTER?.LINK_HEADINGS?.CUSTOMER_POLICES}
          list={STATIC_STRINGS?.FOOTER.FOOTER_NAVLINKS_VAR3}
        />
      </div>
    </div>
  );
};

export default FooterLinkList;
