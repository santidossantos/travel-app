import { Box, Typography } from '@mui/material'
import { Gallery } from '../components/cities/Gallery'
import { CityItemProps } from '../interfaces/city-item-props'
import { useState, useRef } from 'react'
import cityItems from '../mocks/city-items.json'
import { CityItem } from '../components/cities/CityItem'
import { CommentSection } from '../components/cities/comment/CommentSection'

const cities: CityItemProps[] = cityItems as CityItemProps[]

export function CitiesPage() {
  const [selectedCity, setSelectedCity] = useState<CityItemProps>(cities[0])
  const galleryRef = useRef<HTMLDivElement>(null)

  const handleCityClick = (city: CityItemProps) => {
    setSelectedCity(city)
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
          Selecciona una ciudad
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
          {cities.map((city) => (
            <CityItem
              key={city.title}
              {...city}
              onClick={() => handleCityClick(city)}
              sx={{
                cursor: 'pointer',
                width: 280,
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
          ))}
        </Box>
      </Box>
      <section className="gallery" ref={galleryRef}>
        <Gallery city={selectedCity} />
      </section>

      <section>
        <CommentSection initialComments={selectedCity.comments} />
      </section>
    </Box>
  )
}
