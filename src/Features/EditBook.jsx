import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BookSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState(location.state.id);
  const [bookName, setBookName] = useState(location.state.bookName);
  const [author, setAuthor] = useState(location.state.author);
  const [desc, setDesc] = useState(location.state.author);
  const [image, setImage] = useState(location.state.image);

  const handleUpdateBook = (e) => {
    e.preventDefault();

    dispatch(
      updateBook({
        id,
        bookName,
        author,
        desc,
        image,
      })
    );
    navigate("/books_list");
  };

  return (
    <div className="min-h-[100vh] bg-gray-400 text-xl flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl uppercase font-semibold">
        Update your Book Data
      </h1>
      <form
        className="flex flex-col items-start gap-3"
        onSubmit={handleUpdateBook}
      >
        <input
          className="outline-none focus:border-b-2 border-black px-2 py-3 bg-slate-200"
          type="number"
          placeholder="Id"
          name="id"
          value={id}
          readOnly
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          className="outline-none focus:border-b-2 border-black px-2 py-3 bg-slate-200"
          type="text"
          placeholder="Book name"
          name="bookName"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <input
          className="outline-none focus:border-b-2 border-black px-2 py-3 bg-slate-200"
          type="text"
          placeholder="Author"
          name="author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <input
          className="outline-none focus:border-b-2 border-black px-2 py-3 bg-slate-200"
          type="text"
          placeholder="Description"
          name="desc"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <input
          className="outline-none focus:border-b-2 border-black px-2 py-3 bg-slate-200"
          type="text"
          placeholder="Image link"
          name="image"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          className="bg-black font-semibold uppercase border-none text-white hover:bg-white hover:text-black hover:border-2 cursor-pointer duration-1000 px-6 py-2"
          type="submit"
          value="Update Book"
        />
      </form>
    </div>
  );
};

export default EditBook;
