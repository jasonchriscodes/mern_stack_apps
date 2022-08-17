import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/string";

const BookDetailsPage = () => {
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

  const handleDeleteClick = () => {
    axios
      .delete(`https://jason-mern-stack.herokuapp.com/api/books/${id}`)
      .then((res) => {
        console.log(res);
        navigate('/')
      })
      .catch((err) => {
        console.log("Error form ShowBookDetails_deleteClick");
      });
  };

  const renderBookDetails = () => {
    return (
      <div>
        <table className="table table-hover table-dark">
          <tbody>
            {Object.keys(book).map((key, index) => {
              const detailsKey = capitalizeFirstLetter(key);
              const value = book[key];

              return (
                <tr key={`#book-details-row-${value}`}>
                  <th scope="row">{index + 1}</th>
                  <td>{detailsKey}</td>
                  <td>{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="ShowBookDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Book List
            </Link>
          </div>
          <br />
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Book's Record</h1>
            <p className="lead text-center">View Book's Info</p>
          </div>
        </div>
        <div>{renderBookDetails()}</div>

        <div className="row">
          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-outline-danger btn-lg btn-block"
              onClick={handleDeleteClick}
            >
              Delete Book
            </button>
            <br />
          </div>

          <div className="col-md-6">
            <Link
              to={`/edit-book/${book._id}`}
              className="btn btn-outline-info btn-lg btn-block"
            >
              Edit Book
            </Link>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
