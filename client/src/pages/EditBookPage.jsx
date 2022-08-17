import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditBookPage = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jason-mern-stack.herokuapp.com/api/books/${id}`)
      .then((res) => {
        console.log("Print-showBookDetails-API-response: " + res.data);
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("Error from ShowBookDetails");
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: book.title,
      isbn: book.isbn,
      author: book.author,
      description: book.description,
      published_date: book.published_date,
      publisher: book.publisher,
    };

    axios
      .put(`https://jason-mern-stack.herokuapp.com/api/books/${id}`, data)
      .then((res) => {
        navigate(`/show-book/${id}`);
      })
      .catch((err) => {
        console.log(err);
        console.log("Error in UpdateBookInfo!");
      });
  };

  const handleChange = (e) => {
    setBook((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="UpdateBookInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show BooK List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Book</h1>
            <p className="lead text-center">Update Book's Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title of the Book"
                name="title"
                className="form-control"
                value={book.title}
                onChange={handleChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="isbn">ISBN</label>
              <input
                type="text"
                placeholder="ISBN"
                name="isbn"
                className="form-control"
                value={book.isbn}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="form-control"
                value={book.author}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                placeholder="Describe this book"
                name="description"
                className="form-control"
                value={book.description}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="published_date">Published Date</label>
              <input
                type="date"
                placeholder="published_date"
                name="published_date"
                className="form-control"
                value={book.published_date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                placeholder="Publisher of this Book"
                name="publisher"
                className="form-control"
                value={book.publisher}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBookPage;
