import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Books from './components/Books';
import About from './components/About';
import Book from './components/Book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/books' element={<Books/>}>
          <Route index element={
            <main className='mt-3 mx-4'>
              <p>Choose your book :</p>
            </main>
          }></Route>
        <Route path=':bookId' element={<Book/>}></Route>
        </Route>
        <Route path='/about' element={<About/>}></Route>
      </Route>
      <Route path='*' element={
        <main style={{height:600}} className='d-flex justify-content-center align-items-center'>
          <h4 className='bg-secondary py-5 w-50 text-center rounded-pill text-white'>Page Not Found!</h4>
        </main>
      }></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

