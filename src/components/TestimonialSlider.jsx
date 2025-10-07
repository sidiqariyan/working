import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP Marketing',
    company: 'TechFlow',
    image: '/assets/img/about/team_1.jpg',
    quote: 'Chatriox transformed our outreach. 2x reply rates and 98% deliverability consistently.',
    metrics: '+120% ROI'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Growth Director',
    company: 'ScaleUp Inc',
    image: '/assets/img/about/team_2.jpg',
    quote: 'The AI analyzer saved us weeks of manual analysis. Clear insights, actionable recommendations.',
    metrics: '+45% Open Rate'
  },
  {
    name: 'Emily Watson',
    role: 'Head of Sales',
    company: 'CloudVenture',
    image: '/assets/img/about/team_3.jpg',
    quote: 'WhatsApp integration was seamless. Our international campaigns now perform 3x better.',
    metrics: '+300% Engagement'
  },
  {
    name: 'David Kim',
    role: 'Marketing Manager',
    company: 'InnovateLabs',
    image: '/assets/img/about/team_4.jpg',
    quote: 'Template builder with AI suggestions accelerated our campaign creation by 80%.',
    metrics: '80% Faster'
  },
  {
    name: 'Lisa Thompson',
    role: 'CMO',
    company: 'GrowthCorp',
    image: '/assets/img/home-two/author_img_1.png',
    quote: 'Enterprise controls and compliance features gave us confidence to scale globally.',
    metrics: '5x Scale'
  }
]

export default function TestimonialSlider({ className = '' }) {
  return (
    <section className={`sec_padding ${className}`}>
      <div className="container">
        <div className="section_title text-center mb-5">
          <h2 className="title-animation">Trusted by Growth Teams Worldwide</h2>
          <p>See how companies achieve better results with Chatriox</p>
        </div>
        
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active'
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="service_item h-100 position-relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width={50}
                    height={50}
                    style={{ objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.role} at {testimonial.company}</small>
                  </div>
                </div>
                <blockquote className="mb-3">
                  <p className="mb-0">"{testimonial.quote}"</p>
                </blockquote>
                <div className="badge bg-primary-subtle text-primary">
                  {testimonial.metrics}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="d-flex justify-content-center mt-4 gap-3">
          <button className="swiper-button-prev btn btn-outline-primary rounded-circle p-2" style={{ position: 'static', margin: 0, width: '40px', height: '40px' }}>
            ←
          </button>
          <button className="swiper-button-next btn btn-outline-primary rounded-circle p-2" style={{ position: 'static', margin: 0, width: '40px', height: '40px' }}>
            →
          </button>
        </div>
      </div>

      <style jsx>{`
        .testimonial-slider .swiper-pagination {
          position: static;
          margin-top: 2rem;
        }
        .testimonial-slider .swiper-pagination-bullet {
          background: #6c757d;
          opacity: 0.5;
        }
        .testimonial-slider .swiper-pagination-bullet-active {
          background: var(--bs-primary);
          opacity: 1;
        }
        .hover-bg-light:hover {
          background-color: #f8f9fa !important;
        }
      `}</style>
    </section>
  )
}