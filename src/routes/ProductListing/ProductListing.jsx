import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";
import classNames from "classnames";
import styles from "./ProductListing.module.css";
import ProductsView from "./components/ProductsView";

const ProductListing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts("a"));
  }, [dispatch]);
  const data = useSelector((state) => state.products);
  return (
    <div className={classNames(styles.mainCont)}>
      <div className={classNames(styles)}>1</div>
      <div className={classNames(styles)}>
        <ProductsView allProducts={data}/>
      </div>
    </div>
  );
};

export default ProductListing;
