import BooksCard from "../components/BooksCard";

const getBooks = async () => {
  const res = await fetch("http://localhost:5000/books", {
    next: { revalidate: 20 },
  });
  if (!res.ok) {
    throw new Error("Failed to laod books ");
  }
  return res.json();
};

const BooksPage = async () => {
  const books = await getBooks();
  return (
    <div>
      <h1>Books : {books.length}</h1>

      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => (
          <BooksCard book={book} key={book.id}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
