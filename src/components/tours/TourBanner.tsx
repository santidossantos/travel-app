import { Box, Typography } from '@mui/material'

export function TourBanner() {
  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://static.wixstatic.com/media/nsplsh_4a3766786b68744f717430~mv2_d_4592_3064_s_4_2.jpg/v1/fill/w_1303,h_396,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_4a3766786b68744f717430~mv2_d_4592_3064_s_4_2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '24em',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '30%',
          height: '70%',
          fontSize: '1.8em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1em',
          textAlign: 'center',
          backgroundColor: 'white',
          borderTopLeftRadius: '24px',
          borderBottomRightRadius: '24px',
          opacity: 0.8,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Playfair Display, serif',
          }}
        >
          Travel Specials & Inspiration
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Didot eText W01 Italic',
            fontSize: '0.65em',
          }}
        >
          <span>Bucket List Adventures</span>
        </Typography>
      </Box>
    </Box>
  )
}
