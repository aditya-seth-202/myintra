import classNames from "classnames";
import styles from "./Home.module.css";
import couponBanner from "../../assets/couponBannerHome.png";
import grid1 from "../../assets/homeImgGrid1.png";
import { URLS } from "../../constants/url";

const Home = () => {
  return (
    <div className={classNames(styles.mainCont)}>
      <img src={couponBanner} alt="coupon banner" className={classNames(styles.couponBanner)}/>
      <div className={classNames(styles.imgGrid)}>
        <div>
          <img src={URLS.IMAGE_URLS.MYNTRA_HOME_LEFT} alt="" />
        </div>
        <div>
          <img src={URLS.IMAGE_URLS.MYNTRA_HOME_RIGHT} alt="" />
        </div>
      </div>
      <div className={classNames(styles.shopByCat)}>
        <img src={URLS?.IMAGE_URLS.SHOP_BY_CATEGORY} alt="" />
      </div>
      <div>
        <img src={grid1} alt="" />
      </div>
    </div>
  );
};

export default Home;
