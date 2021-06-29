import React from 'react';

import {Home} from './pages/Home'

import './styles/global.scss'

import {BrowserRouter, Route} from 'react-router-dom'

import { Articles } from './pages/Articles'


function App() {
  return (

      <BrowserRouter>
      
        <Route path='/' exact component={Home} /> 
        <Route path='/articles/teste' component={Articles} />
      
      </BrowserRouter>

  );
}

export default App;