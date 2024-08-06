import { Box } from '@mui/material'
import { VideoBanner } from '../components/home/VideoBanner'
import { BannerDescription } from '../components/home/BannerDescription'
import CityList from '../components/cities/CityList'
import cityItems from '../mocks/city-items.json'

export function HomePage() {
  return (
    <Box>
      <section className="video-banner">
        <VideoBanner />
      </section>

      <section>
        <BannerDescription />
      </section>

      <section className="slider">
        <CityList cities={cityItems} />
      </section>
    </Box>
  )
}
