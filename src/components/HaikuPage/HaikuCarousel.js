import { useState, useEffect } from "react";
import Slider from "react-slick";
import AfroStyles from "./AfroStyles";
import '../../App.css'

const HaikuCarousel = () => {
  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slider1, setSlider1] = useState(null);
  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    autoplaySpeed: 1000,
    lazyLoad: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
         slidesToShow: 1,
        }
       }
    ]
  };

  return (
    <>
    <div className="content">
      <h1 className="header">Afro Styles Fashion Store</h1>
      <div className="container">
        <Slider {...settings}
            asNavFor={nav1}
            ref={(slider) => setSlider1(slider)}
        >
          {AfroStyles.map((item) => (
            <div  key={item.id}>
              <div className="img-body">
                <img src={item.src} alt={item.alt} />
              </div>
            </div>
          ))}
        </Slider>
        <div className="thumb-wrapper">
          {AfroStyles.map((item, idx) => (
            <div 
              key={item.id} 
              className={currentSlide === idx ? "active": null} 
              onClick={() => {
                slider1?.slickGoTo(idx)
              }}>
              <img src={item.src} alt={item.alt}/>
              {currentSlide}
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default HaikuCarousel;