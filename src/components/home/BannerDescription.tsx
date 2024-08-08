import { Box, Button, Typography } from '@mui/material'

export function BannerDescription() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Didot eText W01 Italic',
          fontSize: '1.2rem',
          fontWeight: '200',
          textAlign: 'center',
          color: '#4d4d4d',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          verticalAlign: 'baseline',
        }}
      >
        <p style={{ margin: 0 }}>
          Una agencia de viajes independiente. Ofrecemos un trato completamente
          personal para crear las próximas vacaciones de tus sueños.
        </p>
        <p style={{ margin: 0 }}>Asistencia al viajero.</p>
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#4d4d4d',
          borderRadius: '0',
          color: 'white',
          fontSize: '14px',
          fontWeight: '300',
          padding: '8px 35px',
          textTransform: 'none',
          ':hover': { backgroundColor: 'rgb(187,149,147, 0.8)' },
        }}
      >
        Viaja ahora
      </Button>
    </Box>
  )
}
