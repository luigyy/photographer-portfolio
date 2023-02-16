import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./testimonials.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <>
      <div className="h-[80vh] bg-[#181818]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {["1", "2", "3", "4", "5", "6"].map((item) => (
            <SwiperSlide className=" bg-[#feebc7]">
              <div className="relative h-full w-full ">
                {/* avatar div  */}
                <div className="absolute -top-6 left-[225px] h-12 w-12 rounded-full ">
                  <img
                    src="avatar.jpg"
                    className="h-full w-full rounded-full object-cover object-center ring-4 ring-[#181818]"
                    alt=""
                  />
                </div>
                <div className="pt-20 ">
                  <p className="mx-auto w-[85%] border-b-2 border-b-[#181818]/20 pb-5 text-center font-bold text-[#181818]/80">
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ea illo tempore ullam voluptates sit ut, ad accusantium
                    maiores quis commodi minus? Voluptates ex suscipit enim
                    facilis, iusto consequatur cupiditate eligendi sequi hic
                    fugit, culpa, facere dolorem numquam."
                  </p>
                  <h1 className="mt-3 text-center text-xl  text-[#181818]/90">
                    Malucha lucha
                  </h1>
                  <h1 className="pb-10 text-center uppercase text-[#181818]/70 ">
                    Product manager
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default TestimonialSlider;
