import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route,Switch
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import ChoiceMenu from './pages/choicemenu/ChoiceMenu';
import AboutGeneral from './pages/AboutGeneral/AboutGeneral';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        
        <Route path = "/" element = {<ChoiceMenu />}>
        </Route>

        <Route path = "home" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

