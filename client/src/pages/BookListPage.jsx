import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

const BookListPage = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jason-mern-stack.herokuapp.com/api/books")
      .then((res) => {
        setBookList(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookList");
      });
  }, []);

  const renderBookList = () => {
    return bookList.map((book, index) => (
      <BookCard book={book} key={`#book-card-${book.isbn}-${index}`} />
    ));
  };

  return (
    <div className="ShowBookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>

          <div className="col-md-11">
            <Link
              to="/create-book"
              className="btn btn-outline-warning float-right"
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">{renderBookList()}</div>
      </div>
    </div>
  );
};

export default BookListPage;
