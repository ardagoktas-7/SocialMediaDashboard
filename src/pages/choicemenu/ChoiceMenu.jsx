import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./ChoiceMenu.css";
import AboutGeneral from '../AboutGeneral/AboutGeneral';
import Yayinlarimiz from '../Yayinlarimiz/Yayinlarimiz';

import styled from 'styled-components'
const ChoiceMenu = () => {

  return (

    <main style={{backgroundColor: '#edebe1'}}>
      <div class = "text-above-wrapper" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <p>Welcome to seçim2023 you can see fake follower anlayses of politicians, politicans details, trending topic manipulations and results by clicking the cards also you can see de general informations and our publishes by scrolling down the screen </p>
      </div>
      <div class="wrapper" style={{display:'flex',flexWrap:'noWrap'}}> 
          <Link to={`home`}>
            <div className='item'>
              <div className='column' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img style={{borderRadius: '50%', width: '150px', height: '150px'}} src="../../images/fake.jpg" alt="Image Description" />
                <span className='text' >Click Here for fake follower analysis</span>
              </div>
            </div>
          </Link>

          <Link to={`home`}>
            <div className='item'>
              <div className='column' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img style={{borderRadius: '50%', width: '150px', height: '150px'}} src="../../images/politician.jpg" alt="Image Description" />
                <span className='text' >Click Here for politician details</span>
              </div>
            </div>
          </Link>
          <Link to={`home`}>
            <div className='item'>
              <div className='column' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img style={{borderRadius: '50%', width: '150px', height: '150px'}} src="../../images/tend.png" alt="Image Description" />
                <span className='text' >Click Here for trend topic manipuliation</span>
              </div>
            </div>
          </Link>
          <Link to={`home`}>
            <div className='item'>
              <div className='column' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img style={{borderRadius: '50%', width: '150px', height: '150px'}} src="../../images/analyses.jpg" alt="Image Description" />
                <span className='text' >Click Here for results and analysis</span>
              </div>
            </div>
          </Link>
          
        </div>
        <hr/>        
        <Outlet />
  
       
        <AboutGeneral/>
        <hr/>
        <Yayinlarimiz/>
    </main>
    
  )
}

export default ChoiceMenu