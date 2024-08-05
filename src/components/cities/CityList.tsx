import 'swiper/css'
import 'swiper/css/navigation'
import '../../styles/cities/CityList.css'
import { CityItem } from './CityItem'
import { CityListProps } from '../../interfaces/city-list-props'
import { Box } from '@mui/material'

export default function CityList({ cities }: CityListProps) {
  return (
    <Box>
      {cities.map((city, index) => (
        <CityItem
          key={index}
          title={city.title}
          subtitle={city.subtitle}
          imageUrl={city.imageUrl}
          description={city.description}
        />
      ))}
    </Box>
  )
}
