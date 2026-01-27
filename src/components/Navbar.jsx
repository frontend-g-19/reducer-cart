import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";

export default function Navbar() {
  return (
    <nav className="bg-red-800 fixed bottom-0 right-0 left-0 md:static">
      <div className="max-w-6xl mx-auto flex items-center justify-center md:justify-between py-5 px-5 lg:px-0">
        <Link to={"/"}>
          <h1 className="fixed bottom-16 left-36 bg-red-800 rounded-tl-full rounded-tr-full p-5 md:static text-2xl text-white">
            Go<span className="text-red-300 font-bold">Buy</span>
          </h1>
        </Link>

        <ul className="flex items-center gap-10">
          <li className="bg-white/20 backdrop-blur-3xl hover:bg-white/40 text-white size-10 flex items-center justify-center rounded-full">
            <Link to={"/"}>
              <CategoryIcon />
            </Link>
          </li>
          <li className="bg-white/20 backdrop-blur-3xl hover:bg-white/40 text-white size-10 flex items-center justify-center rounded-full">
            <Link to={"/cart"}>
              <ShoppingCartIcon />
            </Link>
          </li>
          <li className="bg-white/20 backdrop-blur-3xl hover:bg-white/40 text-white size-10 flex items-center justify-center rounded-full">
            <Link to={"/favorites"}>
              <BookmarksIcon />
            </Link>
          </li>
          <li className="md:hidden bg-white/20 backdrop-blur-3xl hover:bg-white/40 text-white size-10 flex items-center justify-center rounded-full text-2xl">
            <Link to={"/"}>
              <Home />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
