import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

const data = [
  {
    id: 1,
    image: AVTR1,
    name: "Michael Jackson",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, \
            nam dolores molestiae possimus eaque accusantium velit quam eos totam blanditiis dolorem aspernatur error aliquam veniam temporibus qui dolore sapiente officia?"
  },
  {
    id: 2,
    image: AVTR2,
    name: "Michael Jackson",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, \
            nam dolores molestiae possimus eaque accusantium velit quam eos totam blanditiis dolorem aspernatur error aliquam veniam temporibus qui dolore sapiente officia?"
  },
  {
    id: 3,
    image: AVTR3,
    name: "Michael Jackson",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, \
            nam dolores molestiae possimus eaque accusantium velit quam eos totam blanditiis dolorem aspernatur error aliquam veniam temporibus qui dolore sapiente officia?"
  },
  {
    id: 4,
    image: AVTR4,
    name: "Michael Jackson",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, \
            nam dolores molestiae possimus eaque accusantium velit quam eos totam blanditiis dolorem aspernatur error aliquam veniam temporibus qui dolore sapiente officia?"
  },
]

export const Testimonials = () => {
  return (
    <div>
      <section id="testimonials" className="testimonials">
        <h5>Rreview from coworkers & professors</h5>
        <h2>Testimonials</h2>
        <Swiper modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }} 
                className="container testimonials__container">
          {data.map(({id, image, name, review}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
              <div className="coworker__cmu">
                <img src={image} alt="" />
              </div>
              <h5 className="coworker__name">{name}</h5>
                <small className="coworker__review">
                  {review}
                </small>
            </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
    </div>
  )
}
