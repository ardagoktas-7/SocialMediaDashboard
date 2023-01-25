import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Siyasetçi ismi ile ara.</h2><br />
                <p className='header-text fs-18 fw-3'>İstediginiz siyasinin detaylı twitter takipçi analizlerini görmek için siyasetçinin ismini aradikdan sonra kartına tıklayınız</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header