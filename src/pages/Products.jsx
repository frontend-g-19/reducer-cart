import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { products } from "../assets/data";
import { Rating, Stack } from "@mui/material";
import { useContext } from "react";
import { Context } from "../context/Context";

export default function Products() {
  const { state, dispatch } = useContext(Context);

  const isLiked = (id) => state.favorites.some((item) => item.id === id);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="md:hidden text-center py-5 text-2xl font-bold text-white bg-red-800">
        Our Products
      </h1>
      <div className="h-screen px-5 lg:px-0 my-5 sm:my-36 grid justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((mahsulot) => (
          <div
            key={mahsulot.id}
            className="flex flex-col items-center relative gap-10 p-10 w-64 h-auto bg-white shadow-xl transition-all duration-300 hover:shadow-2xl rounded-2xl my-5"
          >
            <button
              onClick={() =>
                dispatch({ type: "TOGGLE_FAVORITE", payload: mahsulot })
              }
              className="absolute p-2 rounded-full top-2 right-2 text-red-600"
            >
              {isLiked(mahsulot.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </button>
            <img src={mahsulot.image} alt={mahsulot.title} />

            <div className="text-center">
              <h1 className="text-xl text-red-800 font-bold">
                {mahsulot.title}
              </h1>
              <p className="my-2">{mahsulot.price} 000 sum</p>

              <Stack spacing={1} className="mt-1">
                <Rating
                  name="rating"
                  defaultValue={mahsulot.rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>

              <button
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: mahsulot })
                }
                className="border-2 w-full my-10 text-red-800 rounded-lg text-lg cursor-pointer transition-all duration-200 active:scale-90"
              >
                add to cart
              </button>
              <p className="absolute bottom-0 left-0 px-5 py-2 text-white font-semibold rounded-bl-2xl bg-red-800">
                {mahsulot.stock}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
