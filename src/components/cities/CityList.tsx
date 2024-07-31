import 'swiper/css'
import 'swiper/css/navigation'
import '../../styles/cities/CityList.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { CityItem } from './CityItem'

export default function CityList() {
  return (
    <Swiper navigation={true} modules={[Navigation]}>
      <SwiperSlide>
        <CityItem />
      </SwiperSlide>
      <SwiperSlide>
        <CityItem />
      </SwiperSlide>
    </Swiper>
  )
}
