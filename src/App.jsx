import { useState } from 'react'
import MySwiper from './components/MySwiper';
import './styles.scss';

const App = () => {
  return (
    <div className="App">
      <h1>Product Carousel</h1>
      <MySwiper />
    </div>
  );
};

export default App;
