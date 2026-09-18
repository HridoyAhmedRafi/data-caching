import Image from "next/image";

const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100  shadow-sm w-100 h-150">
      <figure className="px-10 pt-10">
        <Image
          src={book.image}
          width={300}
          height={300}
          alt="book iamge"
        ></Image>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{book.title}</h2>
        <p>{book.description}</p>
        <div className="flex   gap-20">
          <p>Price: {book.price}</p>
          <p>Category: {book.category}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
