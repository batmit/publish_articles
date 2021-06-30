import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Articles } from './pages/articles';

import {Article} from './pages/article'

import {Home} from './pages/Home';
import { Publish_Articles } from './pages/publish_articles';

import './styles/global.scss';



function App() {
  return (

    <BrowserRouter>
    
      <Route path='/' exact component={Home} />

      <Route path='/articles' exact component={Articles} />

      <Route path='/articles/:id' component={Article} />

      <Route path='/publish' exact component={Publish_Articles} />


    
    </BrowserRouter>

  );
}

export default App;
