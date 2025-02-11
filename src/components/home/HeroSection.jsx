import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
// import required modules
import { EffectCreative, Autoplay } from 'swiper/modules';
import { useState } from "react";
import { Link } from "react-router-dom";
import { PiHandHeartLight } from "react-icons/pi";
import { HiArrowLongRight } from "react-icons/hi2";
const hero_data = [
    {
         id: 1,
         image: "one",
         statement: "Building Brighter Futures, One Village at a Time."
    },
   {
       id: 2,
       image: "two",
       statement: "Africa Rising: Education, Growth, and Hope."
   },
   {
      id: 3,
      image: "three",
      statement: "Empowering African Villages, Transforming Lives."
   }
]
const HeroSection = () => {
    const [swiperRef, setSwiperRef] = useState(null)
  return (
    <div className="hero-section">
              <div className="hero-slider">
                        <Swiper
                                  slidesPerView={1}
                                  loop={true}
                                  speed={1000}
                                  effect={'creative'}
                                  direction={'vertical'}
                                  allowTouchMove={false}
                                  onTouchMove={(e) => e.preventDefault() }
                                  autoplay={{
                                        delay: 8500,
                                        disableOnInteraction: false
                                  }}
                                  creativeEffect={{
                                        prev: {
                                               shadow: true,
                                               translate: [0, "-20%", -1]
                                        },
                                        next: {
                                             translate: [0, "100%", 0],
                                        }
                                  }}
                                  modules={[EffectCreative, Autoplay]}
                                  className="mySwiper"
                                  onSwiper={(swiper) => setSwiperRef(swiper)}
                        >
                                   {hero_data.map(slide => 
                                          <SwiperSlide key={slide.id}>
                                                   { ({ isActive}) => (
                                                         <div className={`hero-slide-moja ${slide.image}`}>
                                                                  <div className="image-plus-overlay"></div>
                                                                  <div className={isActive ? "hero-slide-texts active" : "hero-slide-texts"}>
                                                                            <div className="inner-row">
                                                                                      <div className="hero-slide-inner-wrap">
                                                                                                 <h1>{slide.statement}</h1>

                                                                                                 <div className="hero-links">
                                                                                                          <Link to={"/who-we-are"}>Explore More <span><HiArrowLongRight /></span></Link>
                                                                                                          <Link to={"/donate"}>Donate with Zelle<span><PiHandHeartLight /></span></Link>
                                                                                                 </div>
                                                                                      </div>
                                                                            </div>
                                                                  </div>
                                                         </div>
                                                   )}
                                          </SwiperSlide>
                                   )}
                        </Swiper>

                        <div className="slider-switch-column prev" onClick={() => swiperRef.slidePrev()}>
                                <span>Prev</span>
                        </div>
                        <div className="slider-switch-column next" onClick={() => swiperRef.slideNext()}>
                                     <span>Next</span>
                        </div>
              </div>
    </div>
  )
}

export default HeroSection