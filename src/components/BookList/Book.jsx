import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";


const Book = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book.images} alt = "cover" />
      </div>

      <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Tam İsim: </span>
          <span>{book.Full_Name}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Partinin tam adı </span>
          <span>{book.Political_Party}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>Twitter Adresi </span>
          <span>{book.Twitter}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Unvanı: </span>
          <span>{book.Notes}</span>
        </div>

      

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Bulundugu parti: </span>
          <span>{book.Party_Short}</span>
        </div>

      
    </div>
  )
}

export default Book