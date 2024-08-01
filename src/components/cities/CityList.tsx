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
          title="Destino Senegal"
          subtitle="Una Aventura A Vivir"
          imageUrl="https://media.cntraveler.com/photos/58ecf3b92ec89232fccf6417/16:9/w_2560%2Cc_limit/GettyImages-141946945.jpg
"
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
