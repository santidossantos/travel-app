import { Box, Typography } from '@mui/material'
import { Gallery } from '../components/cities/Gallery'
import { CityItemProps } from '../interfaces/city-item-props'
import { useState, useRef } from 'react'
import cityItems from '../mocks/city-items.json'
import { CityItem } from '../components/cities/CityItem'

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
            padding: '20px',
          }}
        >
          Selecciona una ciudad
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          gap={2} // Espacio entre los ítems
          justifyContent="center" // Opcional: Centrar los ítems
        >
          {cities.map((city) => (
            <CityItem
              key={city.title}
              {...city}
              onClick={() => handleCityClick(city)}
              sx={{
                cursor: 'pointer',
                width: 280, // Tamaño reducido
                boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.1)', // Sombra más suave
                '& img': {
                  height: 150, // Altura de la imagen reducida
                },
                '& .MuiCardHeader-root': {
                  height: 80, // Reducir altura del encabezado
                },
                '& .MuiTypography-h6': {
                  fontSize: '1.1em', // Tamaño de fuente reducido
                },
                '& .MuiTypography-subtitle1': {
                  fontSize: '1.2em', // Tamaño de fuente reducido
                },
              }}
            />
          ))}
        </Box>
      </Box>
      <section className="gallery" ref={galleryRef}>
        <Gallery city={selectedCity} />
      </section>
    </Box>
  )
}
