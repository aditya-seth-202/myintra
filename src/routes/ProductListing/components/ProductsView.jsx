import styles from "../ProductListing.module.css";
import classNames from "classnames";
import ProductCard from "./ProductCard";
import { Pagination } from "@mui/material";
import { useState } from "react";
const ProductsView = ({ allProducts }) => {
  const ITEMS_PER_PAGE = 15;
  const [page, setPage] = useState(1);
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = page * ITEMS_PER_PAGE;
  return (
    <div className={classNames(styles.productsViewOuter)}>
      <div className={classNames(styles.productsView)}>
        {allProducts?.products
          ?.slice(startIndex, endIndex)
          .map((item, index) => (
            <ProductCard data={item} key={index} />
          ))}
      </div>
      <div className={classNames(styles.paginationCont)}>
        <Pagination
          count={Math.ceil(allProducts?.products?.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default ProductsView;
