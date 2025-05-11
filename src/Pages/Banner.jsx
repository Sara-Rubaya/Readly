import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const Banner = () => {
  return (
    <section className="my-10 px-4 md:px-12">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        loop
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/hxVH0Fhd/Best-fiction-feb-25.jpg"
            className="rounded-xl w-full h-[400px] object-cover"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/gLnVT15B/1692993266-1692993266-goodreads-misc.png"
            className="rounded-xl w-full h-[400px] object-cover"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/ccnH2RGk/Feature-Photo-13-Unputdownable-Small-Town-Mysteries-and-Thrillers.jpg"
            className="rounded-xl w-full h-[400px] object-cover"
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
