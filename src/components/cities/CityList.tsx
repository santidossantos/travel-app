import 'swiper/css'
import 'swiper/css/navigation'
import '../../styles/cities/CityList.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { CityItem } from './CityItem'

export default function CityList() {
  return (
    <Swiper navigation modules={[Navigation]}>
      <SwiperSlide>
        <CityItem
          title="Destination Senegal"
          subtitle="Una Aventura para Vivir!"
          imageUrl="https://i.ibb.co/n3G8Z0b/senegal.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CityItem
          title="Destino Isla Pepito"
          subtitle="Una aventura en la que te podes caer"
          imageUrl="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg"
        />
      </SwiperSlide>
    </Swiper>
  )
}
