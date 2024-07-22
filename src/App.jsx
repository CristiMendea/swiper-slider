
import MySwiper from './components/MySwiper';
import Header from './components/Header';
import { CartContextProvider } from './store/CartContext';


const App = () => {
  return (
    <CartContextProvider>
      <Header />
      
      <MySwiper />
    </CartContextProvider>
  );
};

export default App;
