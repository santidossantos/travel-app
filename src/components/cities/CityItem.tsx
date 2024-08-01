import { Box } from '@mui/material'
import '../../styles/cities/CityItem.css'

interface CityItemProps {
  title: string
  subtitle: string
  imageUrl: string
}

export function CityItem({ title, subtitle, imageUrl }: CityItemProps) {
  return (
    <Box
      className="city-item"
      sx={{
        background: 'url(' + imageUrl + ') no-repeat center center / cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          color: 'white',
          textAlign: 'left',
          padding: '5%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h2 style={{ fontSize: '4em' }}>{title}</h2>
        <h3>{subtitle}</h3>
      </Box>
    </Box>
  )
}
