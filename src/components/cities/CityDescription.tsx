// components/cities/CityDescription.tsx
import { Box, Typography } from '@mui/material'
import { CityItemProps } from '../../interfaces/city-item-props'

interface CityDescriptionProps {
  city: CityItemProps
}

export function CityDescription({ city }: CityDescriptionProps) {
  return (
    <Box
      sx={{
        marginBottom: '30px',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Playfair Display',
          fontSize: '1.5em',
          color: 'rgb(71, 71, 71)',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        {city.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Aceh',
          fontSize: '1.2em',
          paddingBlockStart: '20px',
          color: 'rgb(62,62,62)',
        }}
      >
        {city.description}
      </Typography>
    </Box>
  )
}
