import 'swiper/css'
import 'swiper/css/navigation'
import '../../styles/cities/CityList.css'
import { CityItem } from './CityItem'
import { CityListProps } from '../../interfaces/city-list-props'
import { Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export default function CityList({ cities }: CityListProps) {
  return (
    <Box>
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
    </Box>
  )
}
