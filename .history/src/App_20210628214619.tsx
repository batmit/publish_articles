import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Articles } from './pages/articles';

import {Home} from './pages/Home';

import './styles/global.scss';



function App() {
  return (

    <BrowserRouter>
    
      <Route path='/' exact component={Home}/>

      <Route path='/articles' component={Articles}/>
    
    </BrowserRouter>

  );
}

export default App;
