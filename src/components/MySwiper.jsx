import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import products from '../data/products.json';
import ProductSlide from './ProductSlide.jsx';


const App = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
  
    useEffect(() => {
      handleResize(); // Setează starea inițială
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <div className="swiper-container module-padding">
      
      <div className="swiper-container-wrap">
      <h1>Product Carousel</h1>
        <Swiper
          spaceBetween={15}
          slidesPerView={slidesPerView}
          navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
          scrollbar={{ draggable: true }}
          modules={[Navigation, Pagination, Scrollbar]}
        >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductSlide product={product} />
          </SwiperSlide>
        ))}

        
        </Swiper>
        <div className="swiper-pagination"></div>
        <div className="swiper-buttons-container">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  );
};

export default App;