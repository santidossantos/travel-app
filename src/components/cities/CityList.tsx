// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import '../../styles/cities/CityList.css'

// import required modules
import { Navigation } from 'swiper/modules'

import { CityItem } from './CityItem'
import { CityListProps } from '../../interfaces/city-list-props'

export default function CityList({ cities }: CityListProps) {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {cities.map((city, index) => (
        <SwiperSlide key={index}>
          <CityItem
            title={city.title}
            subtitle={city.subtitle}
            imageUrl={city.imageUrl}
            description={city.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
