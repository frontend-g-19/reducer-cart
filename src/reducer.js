export const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const exists = state.favorites.find(
        (item) => item.id === action.payload.id,
      );

      let updatedFavorites;

      if (exists) {
        // remove
        updatedFavorites = state.favorites.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        // add
        updatedFavorites = [
          ...state.favorites,
          {
            ...action.payload,
            liked: true,
          },
        ];
      }

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return {
        ...state,
        favorites: updatedFavorites,
      };
    }

    case "ADD_TO_CART": {
      const exists = state.cart.find((item) => item.id === action.payload.id);

      let updatedCart;

      if (exists) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return { ...state, cart: updatedCart };
    }

    case "CHANGE_QUANTITY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: action.payload.amount,
            }
          : item,
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return { ...state, cart: updatedCart };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload,
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return { ...state, cart: updatedCart };
    }

    default:
      return state;
  }
}
