import {
  Banner,
  Carousel,
  CarouselImg,
  CarouselContainer,
  CarouselWrapper,
} from "./Banner.styles";
import Slider from "react-slick";

export default function BannerUI(props) {
  return (
    <Banner>
      <>
        <CarouselContainer>
          <Slider {...props.settings}>
            {/* <CarouselWrapper>
              <Carousel>
                <CarouselImg src="/images/banner-1.jpg" />
              </Carousel>
            </CarouselWrapper> */}
            <CarouselWrapper>
              <Carousel>
                <CarouselImg src="/images/4.jpeg" />
              </Carousel>
            </CarouselWrapper>
            {/* <CarouselWrapper>
              <Carousel>
                <CarouselImg src="/images/banner-4.jpg" />
              </Carousel>
            </CarouselWrapper> */}
            {/* <CarouselWrapper>
              <Carousel>
                <CarouselImg src="/images/a.jpg" />
              </Carousel>
            </CarouselWrapper> */}
          </Slider>
        </CarouselContainer>
      </>
    </Banner>
  );
}
