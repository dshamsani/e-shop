import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInfo } from "os";

interface ICartState {
  paymentMethod: string;
  userInfo: IUserInfo;
}

interface IUserInfo {
  email: string;
  name: string;
  surname: string;
  mobile: string;
  adress: string;
}

const initialState: ICartState = {
  paymentMethod: "",
  userInfo: {
    email: "",
    name: "",
    surname: "",
    mobile: "",
    adress: "",
  },
};

export const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    changeMethod(state, action: PayloadAction<string>) {
      state.paymentMethod = action.payload;
    },

    changeUserInfo(state, action: PayloadAction<{ email: string; name: string; surname: string; mobile: string; adress: string }>) {
      if (action.payload) {
        state.userInfo.email = action.payload.email;
        state.userInfo.name = action.payload.name;
        state.userInfo.surname = action.payload.surname;
        state.userInfo.mobile = action.payload.mobile;
        state.userInfo.adress = action.payload.adress;
      }
    },
    clearUserInfo(state) {
      state.userInfo.email = "";
      state.userInfo.name = "";
      state.userInfo.surname = "";
      state.userInfo.mobile = "";
      state.userInfo.adress = "";
    },
  },
});

export const { changeMethod, changeUserInfo, clearUserInfo } = cartSlice.actions;

export default cartSlice.reducer;
