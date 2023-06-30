import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
const itemsFromCookie = JSON.parse(Cookies.get("cartItems") || "[]");
export const Store = createContext();

const initialState = {
  cart: {
    // cartItems: itemsFromCookie?.cart?.cartItems?.length>0?[itemsFromCookie?.cart?.cartItems]:[],
    cartItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state?.cart?.cartItems?.find(
        (item) => item?.slug === newItem?.slug
      );
      const sortedCartItems = existItem
        ? state?.cart?.cartItems?.map((item) =>
            item?.name === existItem?.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      const items = {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [...state.cart.cartItems, newItem],
        },
      };
      // Cookies.set("cartItems", JSON.stringify(items));
      return items;
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };
  // value = itemsFromCookie;
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
