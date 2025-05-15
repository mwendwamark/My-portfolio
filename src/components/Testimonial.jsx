import React from "react";
import "../styles/Testimonial.css";
import { Data2 } from "./Data2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section_title">My clients' say</h2>
      <span className="section_subtitle">Testimonial</span>

      <Swiper className="testimonial_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data2.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial_card" key={id}>
              <img
                src={image}
                alt="people_images"
                className="testimonial_img"
              />
              <h3 className="testimonial_name">{title}</h3>
              <p className="testimonial_description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
