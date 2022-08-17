import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className="card-container">
      <img
        src="https://www.nationwidebooks.co.nz/thumbnailer?x=240&y=340&q=100&src=application%2Fmodules%2Fimages%2Fassets%2Fupload%2FKeep_In_A_Cool_Place-cvr.jpg&"
        alt=""
      />
      <div className="desc">
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.title}</Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
