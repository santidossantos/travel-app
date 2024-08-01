import { Box } from '@mui/material'
import '../../styles/cities/CityItem.css'

export function CityItem() {
  return (
    <Box
      className="city-item"
      sx={{
        background:
          'url(https://media.cntraveler.com/photos/58ecf3b92ec89232fccf6417/16:9/w_2560%2Cc_limit/GettyImages-141946945.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1>Senegal</h1>
    </Box>
  )
}
