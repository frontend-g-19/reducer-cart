import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import FavoriteCard from "../components/FavoriteCard";

export default function Favorites() {
  const { state, dispatch } = useContext(FavoritesContext);

  if (state.favorites.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center gap-4">
        <h2 className="text-2xl font-bold text-gray-700">
          Your favorites list is empty
        </h2>
        <p className="text-gray-500">Like products to see them here</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-5 lg:px-0 my-5 sm:my-36">
      <h1 className="text-4xl font-extrabold text-red-800 mb-10">
        Your Favorites
      </h1>

      <div className="flex flex-col gap-6">
        {state.favorites.map((item) => (
          <FavoriteCard key={item.id} item={item} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}
