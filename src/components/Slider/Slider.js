
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css"


// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

 function Slider() {
  return (
    <>
      <Swiper

        style={{
          height:"27vw",
         
          
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
      <div
          slot="container-start"
          className="parallax-bg "
          
          data-swiper-parallax="-23%"
        ></div>
        {/* <SwiperSlide>
        <div style={{position:"relative"}}>
         <p style={{color:"white", fontSize:"2em", position:"absolute"}}>mert</p>
          <img src="caros2.jpg" alt="..." style={{height:"25vw", width:"100vw"}}/>
         </div>
        </SwiperSlide> */}
        <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
            
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
           
          </div>
          <div className="subtitle2" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text2" data-swiper-parallax="-100">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
           
          </div>
          <div className="subtitle3" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text3" data-swiper-parallax="-100">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;