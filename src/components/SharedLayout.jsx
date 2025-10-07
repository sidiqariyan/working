import { Outlet, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import MegaMenu from './MegaMenu'
import Footer from './Footer'
import ChatbotWidget from './ChatbotWidget'
import ScrollProgress from './ScrollProgress'
import FloatingActions from './FloatingActions'

export default function SharedLayout() {
  const location = useLocation()

  useEffect(() => {
    const $ = window.jQuery || window.$
    const applyBgAttrs = () => {
      document.querySelectorAll('[data-bg-color]').forEach(el => {
        const c = el.getAttribute('data-bg-color')
        if (c) el.style.backgroundColor = c
      })
      document.querySelectorAll('[data-bg-image]').forEach(el => {
        const bg = el.getAttribute('data-bg-image')
        if (bg) el.style.background = `no-repeat center 0/cover url(${bg})`
      })
    }
    applyBgAttrs()

    const onScroll = () => {
      const s = window.scrollY || (document.documentElement && document.documentElement.scrollTop) || 0
      const el = document.querySelector('.sticky_nav')
      if (el) el.classList.toggle('navbar_fixed', s > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    if ($ && typeof $.fn.slick === 'function') {
      $('.testimonial_slider_two').not('.slick-initialized').slick({
        slidesToShow: 2, slidesToScroll: 1, arrows: false, dots: true, autoplay: true, autoplaySpeed: 4000,
        responsive: [{ breakpoint: 992, settings: { slidesToShow: 1 } }]
      })
    }

    return () => { window.removeEventListener('scroll', onScroll) }
  }, [location.pathname])

  return (
    <div className="body_wrapper">
      <ScrollProgress />
      <MegaMenu />
      <Outlet />
      <Footer />
      <FloatingActions />
      <ChatbotWidget />
    </div>
  )
}
