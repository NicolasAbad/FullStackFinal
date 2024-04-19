import React, { useState } from 'react';
import axios from 'axios';


export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: title,
      author: author,
      description: description,
    };

    axios
      .post('http://localhost:5000/book/add', newBook) 
      .then((res) => {
        window.location = '/';
      })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };

  return (
    <>
    <head>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />

  </head>
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <a className="btn btn-info float-left" href="/">
              Show Book List
            </a>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form onSubmit={onSubmit} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  spellCheck="false"
                  data-ms-editor="true"
                />
              </div>
              <div className="form-group" >
                <input
               
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  spellCheck="false"
                  data-ms-editor="true"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  spellCheck="false"
                  data-ms-editor="true"
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-4" 
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
