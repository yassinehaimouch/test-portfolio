import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={AVTR1} alt="Avatar_1" />
            </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              officiis minima tenetur cum ex saepe expedita odit numquam
              aspernatur, voluptatibus commodi soluta omnis, quisquam
              praesentium quibusdam cumque nesciunt iusto vel!
            </small>
          </SwiperSlide>

          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={AVTR2} alt="Avatar_2" />
            </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              officiis minima tenetur cum ex saepe expedita odit numquam
              aspernatur, voluptatibus commodi soluta omnis, quisquam
              praesentium quibusdam cumque nesciunt iusto vel!
            </small>
          </SwiperSlide>

          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={AVTR3} alt="Avatar_3" />
            </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              officiis minima tenetur cum ex saepe expedita odit numquam
              aspernatur, voluptatibus commodi soluta omnis, quisquam
              praesentium quibusdam cumque nesciunt iusto vel!
            </small>
          </SwiperSlide>

          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={AVTR4} alt="Avatar_4" />
            </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              officiis minima tenetur cum ex saepe expedita odit numquam
              aspernatur, voluptatibus commodi soluta omnis, quisquam
              praesentium quibusdam cumque nesciunt iusto vel!
            </small>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
