import { useSelector } from "react-redux";
import Book from './Book'

const Home = () => {
    const books = useSelector((state) => state.bookReducer.books);
     const stringBooks = JSON.stringify(books)
     localStorage.setItem('books', stringBooks)
    return (
      <div className="min-h-[100vh] ">
        <div className="flex flex-col items-center gap-4 py-5">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
    );
};

export default Home;