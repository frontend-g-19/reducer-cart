export const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
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

    default:
      return state;
  }
}
