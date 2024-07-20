import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import products from '../data/products.json';
import ProductSlide from './ProductSlide.jsx';


const App = () => {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar]}
      >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductSlide product={product} />
        </SwiperSlide>
      ))}
       {/* Navigation buttons */}
       <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default App;