import { Box, Typography } from '@mui/material'
import { Gallery } from '../components/cities/Gallery'
import { CityItemProps } from '../interfaces/city-item-props'
import { useState, useRef } from 'react'
import cityItems from '../mocks/city-items.json'
import { CityItem } from '../components/cities/CityItem'
import { CommentSection } from '../components/cities/comment/CommentSection'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import '../styles/cities/CityList.css'

const cities: CityItemProps[] = cityItems as CityItemProps[]

export function CitiesPage() {
  const [selectedCity, setSelectedCity] = useState<CityItemProps>(cities[0])
  const galleryRef = useRef<HTMLDivElement>(null)

  const handleCityClick = (city: CityItemProps) => {
    setSelectedCity(city)
    console.log('city', city)
    console.log(selectedCity)
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box>
      <Box mt={2}>
        <Typography
          variant="h6"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontFamily: 'Playfair Display',
            fontSize: '1.5em',
            color: 'rgb(71, 71, 71)',
            fontWeight: 'bold',
            paddingBlockStart: '0px',
            paddingBlockEnd: '20px',
          }}
        >
          Selecciona una Ciudad
        </Typography>
        <Box
          sx={{
            width: '100vw',
            flexGrow: 1,
          }}
        >
          <Swiper navigation={true} modules={[Navigation]} slidesPerView={4}>
            {cities.map((city) => (
              <SwiperSlide key={city.title}>
                <CityItem
                  {...city}
                  onClick={() => handleCityClick(city)}
                  sx={{
                    cursor: 'pointer',
                    flex: '0 0 auto',
                    maxWidth: 300,
                    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.1)',
                    '& img': {
                      height: 150,
                    },
                    '& .MuiCardHeader-root': {
                      height: 80,
                    },
                    '& .MuiTypography-h6': {
                      fontSize: '1.1em',
                    },
                    '& .MuiTypography-subtitle1': {
                      fontSize: '1.2em',
                    },
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
      <section className="gallery" ref={galleryRef}>
        <Gallery city={selectedCity} />
      </section>

      <Box sx={{
        padding: '30px',
      }}>
        <CommentSection initialComments={selectedCity.comments} />
      </Box>
    </Box>
  )
}
