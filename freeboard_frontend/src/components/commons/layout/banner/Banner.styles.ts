import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Banner = styled.div`
  /* width: 1920px; */
  height: 380px;
`;

export const CarouselContainer = styled.div`
  .slick-slider {
    .slick-dots {
      /* color: #FFD400; */
      position: relative;
      top: -50px;
      /* background-color: red; */
      button {
        ::before {
          color: white;
        }
      }
    }
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Carousel = styled.div`
  width: 100%;
  /* height: 200px; */
`;

export const CarouselImg = styled.img`
  width: 2550px;
  height: 380px;
`;