import { useSwipeToRemove } from "../hooks/useSwipeToRemove";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function FavoriteCard({ item, dispatch }) {
  const swipeHandlers = useSwipeToRemove(() =>
    dispatch({ type: "TOGGLE_FAVORITE", payload: item }),
  );

  return (
    <div
      {...swipeHandlers}
      className="group relative flex items-center justify-between bg-white p-6 rounded-2xl shadow-md
                 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 touch-pan-y"
    >
      {/* LEFT */}
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24 flex items-center justify-center rounded-xl bg-gray-100">
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
          <p className="text-lg font-semibold text-red-700 mt-1">
            {item.price} 000 sum
          </p>
          <span className="inline-block mt-2 text-sm px-3 py-1 rounded-full bg-red-100 text-red-700">
            Favorite item
          </span>
        </div>
      </div>

      {/* DESKTOP REMOVE */}
      <button
        onClick={() => dispatch({ type: "TOGGLE_FAVORITE", payload: item })}
        className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full
                   bg-red-50 text-red-600 transition-all duration-300
                   hover:bg-red-600 hover:text-white hover:scale-110 active:scale-95"
      >
        <FavoriteIcon />
      </button>

      {/* MOBILE SWIPE HINT */}
      <span className="absolute right-4 text-sm text-gray-400 sm:hidden">
        Swipe ←
      </span>
    </div>
  );
}
