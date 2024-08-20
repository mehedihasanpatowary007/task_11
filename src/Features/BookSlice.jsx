import { createSlice } from "@reduxjs/toolkit";

const initialBook = {
  books: [
    {
      id: 1,
      bookName: "The Hate U Give",
      author: "Angie Thomas",
      desc: "Angie Thomas is a young adult author who is most well-known for her 2017 novel The Hate U Give. The novel debuted at number one on The New York Times Best Seller List and went on to win several awards, including The William C. Morris Award, the Michael L. Printz Award, the Coretta Scott King Award, and Waterstones Children’s Book Prize. In 2021, Thomas wrote a prequel to The Hate U Give, entitled Concrete Rose. This year, she also co-authored a novel called Blackout with Dhonielle Clayton, Tiffany D. Jackson, Nic Stone, Ashley Woodfolk, and Nicola Yoon.",
      image:
        "https://s2982.pcdn.co/wp-content/uploads/2021/10/hate-give-thomas.jpeg.webp",
    },
    {
      id: 2,
      bookName: " Verity",
      author: "Colleen Hoover",
      desc: "Colleen Hoover is a notable author on this list because she is the first author to ever write a self-published novel that made it to #1 on the New York Times Best Sellers List. That novel was Hopeless, but the novel Hoover is probably best-known for now is Verity, which you’ve probably seen all over BookTok. Colleen Hoover is a popular author across social media, especially Goodreads, where she’s won multiple Goodreads Choice Awards, in 2012, 2013, 2015, and 2016. Every single one of her full-length novels since 2021 have been best sellers.",
      image:
        "https://s2982.pcdn.co/wp-content/uploads/2021/05/image-27.jpeg.webp",
    },
    {
      id: 3,
      bookName: "Neil Gaiman",
      author: " American Gods",
      desc: "Neil Gaiman is an author who writes across several genres, including short fiction, novels, comic books, graphic novels, nonfiction, and films. Gaiman has won several awards, including the Hugo, Nebula, and Bram Stoker awards. He is also the first author to win both the Newbery and the Carnegie medals for the same book, The Graveyard Book. It’s hard to choose one book of Gaiman’s that is the most popular because all of his novels have their fans, but American Gods is one of Gaiman’s best-selling works and has won multiple awards.",
      image:
        "https://s2982.pcdn.co/wp-content/uploads/2019/05/American-Gods-by-Neil-Gaiman.jpg.webp",
    },
  ],
};

export const bookSlice = createSlice({
    name: 'books',
    initialState: initialBook,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const {id, bookName, author, desc, image} = action.payload;
            const isBookExist = state.books.filter(book => book.id === id);

            if(isBookExist){
              isBookExist[0].bookName = bookName;
              isBookExist[0].author = author;
              isBookExist[0].desc = desc;
              isBookExist[0].image = image;
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id)
        }
    }
})

export const {showBooks, addBook , updateBook, deleteBook} = bookSlice.actions;
export default bookSlice.reducer