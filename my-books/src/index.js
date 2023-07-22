import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './component/About';
import Books from './component/Books';
import Book from './component/Book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/about' element={<About />}></Route>
          <Route path='/books' element={<Books />}>
            <Route index element={
              <main className='p-3'>
                <p>Chosse your book</p>
              </main>
            }></Route>
            <Route path=':bookId' element={<Book />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

