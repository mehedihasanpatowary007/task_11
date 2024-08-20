import { useState } from "react";
import { useDispatch} from "react-redux";
import { addBook } from "./BookSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


const AddBooks = () => {
    const [bookName, setBookName] = useState('')
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const book = {id: uuidv4, bookName, desc, author, image }
        dispatch(addBook(book))
        navigate('/books_list')
    }
    return (
      <div className="min-h-screen bg-white text-xl flex flex-col gap-5 justify-center items-center uppercase">
      <h1 className="text-2xl uppercase font-semibold">Add your book</h1>
        <form className="flex flex-col items-start gap-3" onSubmit={handleSubmit}>
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
          className="bg-black font-semibold uppercase border-none text-white hover:bg-white hover:text-black hover:border-2 cursor-pointer duration-1000 px-6 py-2" type="submit" value="Add Book" />
        </form>
      </div>
    );
};

export default AddBooks;