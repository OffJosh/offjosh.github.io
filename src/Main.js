import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Wallpapers from './Wallpapers';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home title="Josh Merrett | Home"/>}></Route>
      <Route exact path='/wallpapers' element={<Wallpapers title="Josh Merrett | Wallpapers"/>}></Route>
    </Routes>
  );
}

export default Main;