import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import BookDetailsPage from "./pages/BookDetailsPage";
import BookListPage from "./pages/BookListPage";
import CreateBookPage from "./pages/CreateBookPage";
import EditBookPage from "./pages/EditBookPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<BookListPage />} />
          <Route path="/show-book/:id" element={<BookDetailsPage />} />
          <Route path="/edit-book/:id" element={<EditBookPage />} />
          <Route path="/create-book" element={<CreateBookPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
