import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteBook } from "./BookSlice";
import { Link } from "react-router-dom";

const ShowBooks = () => {
    const dispatch = useDispatch()
    const books =  useSelector((state)=> state.bookReducer.books)

    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }


    return (
      <div className="min-h-[100vh] bg-white text-xl flex justify-center items-center">
        <table className="table-auto w-full text-center border">
          <thead>
            <tr>
              <th>ID</th>
              <th>BOOK NAME</th>
              <th>AUTHOR</th>
              <th>IMAGE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book, index) => {
                const { id, bookName, author, image, desc } = book;
                return (
                  <tr key={id}>
                    <td>{index + 1}.</td>
                    <td>{bookName}</td>
                    <td>{author}</td>
                    <td className="flex justify-center">
                      <img className="size-10" src={image} alt="book" />
                    </td>
                    <td>
                      <span className="flex justify-center items-center gap-4 ">
                        <Link to={'/edit_book'} state={{id, bookName, author, desc, image}}>
                          <button className="px-4 py-2 outline-none text-xl text-white bg-blue-800 rounded">
                            <FaRegEdit />
                          </button>
                        </Link>
                        <button
                          className="px-4 py-2 outline-none text-xl text-white bg-red-800 border-none rounded"
                          onClick={() => {
                            handleDelete(id);
                          }}
                        >
                          <MdDelete />
                        </button>
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
};

export default ShowBooks;