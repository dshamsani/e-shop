import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { counter, updateProductCount, updateProductData } from "../../../store/slices/productSlice";

interface IData {
  id: number;
  name: string;
  discription: string;
  price: number;
  slug: string;
  image: {
    id: string;
    filename_downoload: string;
  };
}

const useCartProduct = (data: IData) => {
  let productCount = useAppSelector((state) => state.productReducer.productCount);
  const dispatch = useAppDispatch();

  const { t } = useTranslation("common");

  const matches = useMediaQuery("(min-width: 1200px)");

  const { image, name, price, id, slug } = data;

  let count = 1;
  productCount.map((item) => {
    if (item.productId == id) {
      count = item.productCount;
    }
  });

  const deleteProduct = useCallback((): void => {
    dispatch(updateProductData(id));
    dispatch(updateProductCount(id));
  }, [dispatch, id]);

  const removeProductCount = useCallback((): void => {
    let index = 0;
    productCount.map((item, i) => {
      if (item.productId == id) {
        index = i;
      }
    });
    dispatch(
      counter({
        productId: id,
        productCount: productCount[index].productCount,
        productMethod: "remove",
      })
    );
  }, [dispatch, id, productCount]);

  const addProductCount = useCallback((): void => {
    let index = 0;
    productCount.map((item, i) => {
      if (item.productId == id) {
        index = i;
      }
    });
    dispatch(
      counter({
        productId: id,
        productCount: productCount[index].productCount,
        productMethod: "add",
      })
    );
  }, [dispatch, id, productCount]);

  const removeOrAddProductCount = useCallback((): void => {
    let index = 0;
    productCount.map((item, i) => {
      if (item.productId == id) {
        index = i;
      }
    });
    if (productCount[index].productCount == 1) {
      deleteProduct();
    } else {
      removeProductCount();
    }
  }, [deleteProduct, id, productCount, removeProductCount]);

  return {
    t,
    count,
    image,
    name,
    slug,
    price,
    deleteProduct,
    addProductCount,
    removeOrAddProductCount,
    matches,
  };
};

export default useCartProduct;
