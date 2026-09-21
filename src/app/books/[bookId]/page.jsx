import BookCard from "@/app/components/BookCard";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();
  return books.slice(0, 3).map((book) => ({ bookId: book.id }));
};

const BookDetailsPage = async ({ params }) => {
  const { bookId } = await params;
  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const book = await res.json();

  return (
    <div className="my-3">
      <h1 className="text-center text-2xl ">Book Details</h1>
      <div className="flex items-center justify-center">
        <BookCard book={book}></BookCard>
      </div>
    </div>
  );
};

export default BookDetailsPage;
