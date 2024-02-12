import classNames from "classnames";
import styles from "../ProductListing.module.css";
import { URLS } from "@/constants/url";

const ProductCard = ({ data }) => {
  console.log(data, "uio");
  return (
    <div className={classNames(styles)}>
      <div className={classNames(styles)}>
        <img src={URLS.IMAGE_URLS.PRODUCT_CARD} alt="" />
      </div>
    </div>
  );
};

export default ProductCard;
