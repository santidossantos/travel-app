import { Alert, Box, Button } from '@mui/material'
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
          fontFamily: 'Roboto, sans-serif',
          marginTop: '10%',
        }}
      >
        <h2 style={{ fontSize: '3.4em', margin: 0 }}>{title}</h2>
        <h3 style={{ fontSize: '2em', marginTop: 20 }}>{subtitle}</h3>
        <Button
          variant="contained"
          sx={{
            width: '13em',
            borderRadius: 3,
            padding: '0.9em 0.3em',
            marginTop: '5%',
            backgroundColor: '#148567',
            font: 'Arial',
            fontSize: '0.8em',
            letterSpacing: 1,
          }}
        >
          Descubrir
        </Button>
      </Box>

      <Box
        sx={{
          textAlign: 'left',
          padding: '5%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontFamily: 'Roboto, sans-serif',
          paddingTop: 6,
          width: '20%',
        }}
      >
        <Alert
          severity="info"
          sx={{
            backgroundColor: 'rgba(58, 61, 59, 0.9)',
            color: 'white',
            borderRadius: 3,
            width: '100%',
          }}
        >
          Mas informacion
        </Alert>
      </Box>
    </Box>
  )
}
