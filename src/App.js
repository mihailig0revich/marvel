import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom"

import Header from './components/header/Header.jsx'
import CharactersContainer from './components/characters/CharactersContainer.jsx';
import CharacterContainer from './components/character/CharacterContainer.jsx';
import SingleComicsContainer from './components/singeComics/SingleComicsContainer.jsx';
import ComicsContainer from './components/comics/ComicsContainer.jsx';

import './App.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path = '/' element = {<CharactersContainer/>}/>
          <Route path = '/comics' element = {<ComicsContainer/>}/>
          <Route path = '/character/:id' element = {<CharacterContainer/>}/>
          <Route path = '/comics/:id' element = {<SingleComicsContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
