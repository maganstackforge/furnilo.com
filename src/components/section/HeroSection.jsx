import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css/autoplay'
import 'swiper/css'
import { sliderData } from '@/data/home/HeroSectionData'
const HeroSection = () => {
  return (
    <div className='w-full h-full index-0'>
      <Swiper
        loop={true}
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            {window.innerWidth >= 640 && item.type === 'video' ? (
              <video
                src={item.src}
                title='Premium furniture showcase video'
                poster={item.poster}
                autoPlay
                muted
                loop
                playsInline
                className='w-full h-52 md:h-96 object-cover'
              />
            ) : (
              <img
                src={item.poster || item.src}
                alt={item.title || 'Images'}
                title={item.title}
                className='w-full h-52 md:h-96 object-cover'
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSection
