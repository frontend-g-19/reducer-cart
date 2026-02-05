import { useContext } from "react";
import { Context } from "../context/Context";

export default function Cart() {
  const { state, dispatch } = useContext(Context);

  const totalPrice = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (state.cart.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-bold">
        Cart is empty
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-5 lg:px-0 my-5 sm:my-36">
      <h1 className="text-3xl font-bold mb-10 text-red-800">Your Cart</h1>

      <div className="flex flex-col gap-6">
        {state.cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-5 shadow-md rounded-2xl">
            <div className="flex items-center gap-5">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />

              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-red-800 font-bold">{item.price} 000 sum</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  dispatch({
                    type: "CHANGE_QUANTITY",
                    payload: {
                      id: item.id,
                      amount: Math.max(1, item.quantity - 1),
                    },
                  })
                }
                className="border rounded px-3 py-1"
              >
                -
              </button>

              <span className="font-bold">{item.quantity}</span>

              <button
                onClick={() =>
                  dispatch({
                    type: "CHANGE_QUANTITY",
                    payload: {
                      id: item.id,
                      amount: item.quantity + 1,
                    },
                  })
                }
                className="border rounded px-3 py-1"
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
                className="text-red-600 font-semibold"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-10 text-2xl font-bold text-red-600">
        Total: {totalPrice}000 sum
      </div>
    </div>
  );
}
