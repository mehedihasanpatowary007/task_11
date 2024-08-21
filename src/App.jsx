import Index from "./Routes/Index";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const books = useSelector((state) => state.bookReducer.books);
  
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <>
      <Index />
    </>
  );
}

export default App;
