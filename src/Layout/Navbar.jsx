import { Link } from "react-router-dom";

const Navbar = () => {

    return (
      <nav className="flex gap-9 justify-around items-center bg-slate-500 py-5 uppercase">
        <h1 className="font-bold italic text-center text-4xl uppercase">
          Books <span className="text-blue-700">House</span>
        </h1>
        <div className="flex gap-6">
          <Link
            className="hover:text-white duration-500 font-semibold"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:text-white duration-500 font-semibold"
            to={"/books_list"}
          >
            Books List
          </Link>
          <Link
            className="hover:text-white duration-500 font-semibold"
            to={"/add_books"}
          >
            Add Books
          </Link>
        </div>
      </nav>
    );
};

export default Navbar;