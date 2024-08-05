import 'swiper/css'
import 'swiper/css/navigation'
import '../../styles/cities/CityList.css'
import { Navigation } from 'swiper/modules'
import { CityItem } from './CityItem'
import { CityListProps } from '../../interfaces/city-list-props'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function CityList({ cities }: CityListProps) {
  return (
    <Swiper navigation={true} modules={[Navigation]} slidesPerView={3}>
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
