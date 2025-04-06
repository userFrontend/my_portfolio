import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import './Carousel.css'
import "slick-carousel/slick/slick-theme.css";

const SlickCarousel = ({children, speed, sm, md, lg, xl, fade}) => {

  return (
    <div className='slick-carousel'>
            <Slider className='carousel' adaptiveHeight={300} arrows={false} responsive= { [
                {
                breakpoint: 320,
                settings: {
                    dots: true,
                    fade: fade ? true : false,
                    speed: 500,
                    slidesToShow: sm,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: speed,
                    arrows: false
                }
                },
                {
                breakpoint: 768,
                settings: {
                    dots: true,
                    fade: fade ? true : false,
                    speed: 500,
                    slidesToShow: md,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: speed,
                    arrows: false
                }
                },
                {
                breakpoint: 1240,
                settings: {
                    dots: true,
                    fade: fade ? true : false,
                    speed: 500,
                    slidesToShow: lg,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: speed,
                    arrows: true
                }
                },
                {
                breakpoint: 1600  ,
                settings: {
                    dots: true,
                    fade: fade ? true : false,
                    speed: 500,
                    slidesToShow: xl,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: speed,
                    arrows: true
                }
                }
            ]}>
              {children}
            </Slider>
    </div>
  );
};

export default SlickCarousel;