import { useState, useCallback } from "react";
import type { IProductitem } from "../../../Interfaces/IProductItem";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { counter, increment } from "../../../store/slices/productSlice";

const ProductDetailDesktopButtons = () => {
  const [count, setCount] = useState<number>(1);

  const dispatch = useAppDispatch();
  const cartItemProductData = useAppSelector((state) => state.productReducer.data);
  let productCounter = useAppSelector((state) => state.productReducer.productCount);

  const addProductCount = useCallback((): void => {
    setCount(count + 1);
  }, [count]);
  const removeProductCount = useCallback((): void => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  }, [count]);

  const AddToCart = (data: IProductitem) => {
    const { id } = data;
    if (!(productCounter.filter((e) => e.productId == id).length > 0)) {
      dispatch(
        counter({
          productId: id,
          productCount: count,
          productMethod: "nocon",
        })
      );
    } else {
      dispatch(
        counter({
          productId: id,
          productCount: count,
          productMethod: "con",
        })
      );
    }

    if (!(cartItemProductData.filter((e) => e?.id == id).length > 0)) {
      dispatch(increment(data));
    }
  };

  return {
    AddToCart,
    dispatch,
    cartItemProductData,
    productCounter,
    count,
    addProductCount,
    removeProductCount,
  };
};

export default ProductDetailDesktopButtons;
