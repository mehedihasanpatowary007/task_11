/* eslint-disable react/prop-types */

const Book = ({book}) => {
    const {image, bookName, author, desc} = book;
    return (
      <div className="flex w-[800px] max-h-[450px] gap-2 p-5 bg-slate-400">
        <div className="w-[40%]">
          <img className=" h-[400px] w-[260px]" src={image} alt="" />
        </div>
        <div className="w-[60%] flex flex-col justify-center my-5 gap-5 italic">
          <h2 className="font-medium uppercase text-3xl">
            {bookName}
          </h2>
          <h2 className="text-2xl">
            Author : {author}
          </h2>
          <p>{desc}</p>
        </div>
      </div>
    );
};

export default Book;