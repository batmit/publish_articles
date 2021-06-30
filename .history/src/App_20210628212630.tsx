import React from 'react';

import {Home} from './pages/Home'

import './styles/global.scss'

import {BrowserRouter, Route} from 'react-router-dom'

import { Articles } from './pages/articles'


function App() {
  return (

      <BrowserRouter>
      
        <Route path='/' exact component={Home} /> 
      
      </BrowserRouter>

  );
}

export default App;
