import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddBook from "./components/addBook";
import BookList from "./components/bookList"




export default function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>


        <Route path="/" exact element={<BookList />} />
        <Route path="/create-book" element={<AddBook />} />
      
      </Routes>
    </BrowserRouter>
    </>
  );
}
