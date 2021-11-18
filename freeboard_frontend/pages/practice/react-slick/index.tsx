import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <h2> 캐러셀 테스트</h2>
        <Slider {...settings}>
          <div>
            <h3>
              <img src="/images/1.jpg" />
            </h3>
          </div>
          <div>
            <h3>
              <img src="/images/2.jpg" />
            </h3>
          </div>
          <div>
            <h3>
              <img src="/images/3.jpg" />
            </h3>
          </div>
          <div>
            <h3>
              <img src="/images/4.jpg" />
            </h3>
          </div>
          <div>
            <h3>
              <img src="/images/5.jpg" />
            </h3>
          </div>
          <div>
            <h3>
              <img src="/images/6.jpg" />
            </h3>
          </div>
        </Slider>
      </div>
    </>
  );
}
