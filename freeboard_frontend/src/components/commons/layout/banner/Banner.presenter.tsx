import { Banner, Carousel, CarouselImg } from "./Banner.styles";
import Slider from "react-slick";

export default function BannerUI(props) {
  return (
    <Banner>
      <>
        <div>
          <Slider {...props.settings}>
            <div>
              <Carousel>
                <CarouselImg src="/images/a.jpg" />
              </Carousel>
            </div>
            <div>
              <Carousel>
                <CarouselImg src="/images/10.jpeg" />
              </Carousel>
            </div>
            <div>
              <Carousel>
                <CarouselImg src="/images/11.jpeg" />
              </Carousel>
            </div>
            <div>
              <Carousel>
                <CarouselImg src="/images/a.jpg" />
              </Carousel>
            </div>
          </Slider>
        </div>
      </>
    </Banner>
  );
}
