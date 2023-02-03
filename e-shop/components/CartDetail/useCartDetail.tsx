import { gql, useQuery, useMutation } from "@apollo/client";
import { useTranslation } from "next-i18next";
import { useCallback, useEffect, useState } from "react";
import { IProductitem } from "../../Interfaces/IProductItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearUserInfo } from "../../store/slices/cartSlice";
import { clear, ICountState } from "../../store/slices/productSlice";

export interface ICartDetail {
  products: Array<IProductitem>;
}

const useCartDetail = () => {
  const { t } = useTranslation("common");

  let productData = useAppSelector((state) => state.productReducer.data);
  let productCount = useAppSelector((state) => state.productReducer.productCount);
  const userInfo = useAppSelector((state) => state.cartReducer.userInfo);
  const method = useAppSelector((state) => state.cartReducer.paymentMethod);
  const email = useAppSelector((state) => state.cartReducer.userInfo.email);
  const dispatch = useAppDispatch();

  const [loadingCart, setLoadingCart] = useState<boolean>(true);
  const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [checkCartFormValidation, setcheckCartFormValidation] = useState<boolean>(false);
  const [checkBuisnessTermsChecked, setcheckBuisnessTermsChecked] = useState<boolean>(true);
  const [cartOrderButtonClicked, setCartOrderButtonClicked] = useState<boolean>(false);
  const [orderButtonDisable, setorderButtonDisable] = useState<boolean>(false);
  const [cartIndexArray, setArr] = useState([]);
  const [cartProductAmount, setcartProductAmount] = useState<number>(0);
  const [orderHash, setOrderHash] = useState<string>("");

  const QUERY = gql`
    {
      products(filter: { id: { _in: "${cartIndexArray}" } }) {
        id
        name
        price
        slug
        discription
        image {
          id
          filename_download
        }
      }
    }
  `;

  const createOrder = gql`
    mutation CreateOrderItem(
      $data: JSON!
      $count: JSON!
      $hash_id: String!
      $amount: Int!
      $order_status: String!
      $userName: String!
      $userSurname: String!
      $userEmail: String!
      $userMobile: String!
      $userAdress: String!
    ) {
      create_order_items(
        data: {
          status: "published"
          product_data: $data
          product_count: $count
          hash_id: $hash_id
          amount: $amount
          order_status: $order_status
          name: $userName
          surname: $userSurname
          email: $userEmail
          mobile: $userMobile
          adress: $userAdress
        }
      ) {
        id
      }
    }
  `;

  const [setOrder] = useMutation(createOrder);
  const { data, loading } = useQuery<ICartDetail>(QUERY);

  useEffect(() => {
    setLoadingCart(false);
  }, []);

  useEffect(() => {
    if (!checkCartFormValidation && !checkBuisnessTermsChecked && productData.length !== 0) {
      setorderButtonDisable(false);
    } else {
      setorderButtonDisable(true);
    }
  }, [checkBuisnessTermsChecked, checkCartFormValidation, productData.length, setorderButtonDisable]);

  useEffect(() => {
    let itemArray = [];
    productCount.map((item) => {
      itemArray.push(item.productId.toString());
    });
    setArr(itemArray);

    let sumPrice = 0;
    productData.map((item, i) => {
      sumPrice = sumPrice + item?.price * productCount[i]?.productCount;
    });
    setcartProductAmount(sumPrice);
  }, [cartProductAmount, productCount, productData, setArr, setcartProductAmount]);

  const makeHash = useCallback((length) => {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setOrderHash(result);
    return result;
  }, []);

  const handleCartOrderButtonClicked = useCallback(() => {
    const paymentAPI = async () => {
      const response = await fetch(`/api/${method == "a" ? "card_payment" : "cash_payment"}`, {
        method: "GET",
      });
      return response.json();
    };
    const requestBodyData = (
      productData: Array<IProductitem>,
      productCount: Array<ICountState>,
      subject: string,
      amount: number,
      email: string,
      orderDetail: string,
      amountString: string,
      thankyou: string,
      detailLink: string
    ) => {
      console.log(detailLink);
      return {
        productData,
        productCount,
        subject,
        amount,
        email,
        orderDetail,
        amountString,
        thankyou,
        detailLink,
      };
    };
    const sendMail = async (orderDetailLink: string) => {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(
          requestBodyData(
            productData,
            productCount,
            `${t("orderInfo")} ${Math.floor(Math.random() * (53214 - 21231) + 21231)}`,
            cartProductAmount + 59,
            email,
            t("orderDetail"),
            t("amount"),
            t("thankyou"),
            orderDetailLink
          )
        ),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return response.json();
    };
    paymentAPI().then((data) => {
      if (data.result) {
        const hashLink = makeHash(15);
        setOrder({
          variables: {
            hash_id: hashLink,
            data: productData,
            count: productCount,
            amount: cartProductAmount + 59,
            order_status: "Nová",
            userName: userInfo?.name,
            userSurname: userInfo?.surname,
            userEmail: userInfo?.email,
            userMobile: userInfo?.mobile,
            userAdress: userInfo?.adress,
          },
        });
        sendMail(hashLink);
        if (typeof window !== "undefined") {
          localStorage.clear();
        }
        dispatch(clearUserInfo());
        dispatch(clear());
      }
      setCartOrderButtonClicked(data.result);
      setPopupOpen(true);
    });
  }, [
    cartProductAmount,
    dispatch,
    email,
    makeHash,
    method,
    productCount,
    productData,
    setOrder,
    t,
    userInfo?.adress,
    userInfo?.email,
    userInfo?.mobile,
    userInfo?.name,
    userInfo?.surname,
  ]);

  return {
    snackBarOpen,
    setSnackBarOpen,
    popupOpen,
    setPopupOpen,
    checkCartFormValidation,
    setcheckCartFormValidation,
    setcheckBuisnessTermsChecked,
    cartOrderButtonClicked,
    orderButtonDisable,
    cartProductAmount,
    data,
    loading,
    t,
    handleCartOrderButtonClicked,
    orderHash,
    loadingCart,
  };
};

export default useCartDetail;
