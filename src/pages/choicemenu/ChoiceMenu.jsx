import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ChoiceMenu = () => {
  return (
    <main>
        <div> 
        <Link to = {`home`}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>Click Here for fake follower analysis</span>
          </div>
        </Link>
        <div className='book-item-info-item title fw-7 fs-18'>
            <span>Click Here for politician details</span>
          </div>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>Click Here for trend topic analysis</span>
          </div>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>Click Here for report and analysis</span>
          </div>
        </div>
        
        <Outlet />
    </main>
  )
}

export default ChoiceMenu