import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './components/About';
import Books from './components/Books';
import Book from './components/Book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/about' element={<About />}></Route>
          <Route path='/books' element={<Books />}>
            <Route element={
              <main className='m-4'>
                <p>Choose your book !</p>
              </main>
            } index></Route>
          <Route path='/books/:BookId' element={<Book />}></Route>
          </Route>
        </Route>
        <Route path='*' element={
          <main>
            <p>NOT FOUND !</p>
          </main>
        }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

