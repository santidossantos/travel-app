import 'swiper/css'
import 'swiper/css/navigation'
import '../../styles/cities/CityList.css'
import { CityItem } from './CityItem'
import { CityListProps } from '../../interfaces/city-list-props'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

export default function CityList({ cities }: CityListProps) {
  return (
    <Swiper modules={[Navigation]} navigation slidesPerView={1}>
      {cities.map((city, index) => (
        <SwiperSlide key={index}>
          <CityItem
            title={city.title}
            subtitle={city.subtitle}
            imageUrl={city.imageUrl}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
