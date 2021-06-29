import React from 'react';

import {Home} from './pages/Home';

import './styles/global.scss';


function App() {
  return (

      <BrowserRouter>

        <Route path='/' component={Home}  />

      </BrowserRouter>

  );
}

export default App;
