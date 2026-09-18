"use client";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { UserContext } from "../contexts/UserContext";
import useUser from "../hooks/useUser";

const BooksCard = ({ book }) => {
  const user = useUser();
  console.log("from context in books card", user);

  return (
    <div className="card bg-base-100  shadow-sm">
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
        <div className="card-actions">
          <Link href={`/books/${book.id}`}>
            <button className="btn btn-primary">Book Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
