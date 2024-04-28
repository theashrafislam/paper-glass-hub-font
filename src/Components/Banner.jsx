import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';


import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";

const Banner = () => {
    return (
        <div className='mt-2'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full h-[260px] md:h-[400px] lg:h-[585px] rounded-xl' src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[260px] md:h-[400px] lg:h-[585px] rounded-xl' src={slide2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[260px] md:h-[400px] lg:h-[585px] rounded-xl' src={slide3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[260px] md:h-[400px] lg:h-[585px] rounded-xl' src={slide4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[260px] md:h-[400px] lg:h-[585px] rounded-xl' src={slide5} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;