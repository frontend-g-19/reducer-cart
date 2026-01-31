import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";

export default function App() {
  return (
    <FavoritesProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </FavoritesProvider>
  );
}
