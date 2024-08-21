import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import ShowBooks from "../Features/ShowBooks";
import AddBooks from "../Features/AddBooks";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import EditBook from "../Features/EditBook";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books_list" element={<ShowBooks />} />
        <Route path="/edit_book" element={<EditBook />} />
        <Route path="/add_books" element={<AddBooks />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
