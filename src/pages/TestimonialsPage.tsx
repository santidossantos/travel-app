import { Box, Typography } from '@mui/material'
import { Testimonial } from '../components/testimonials/Testimonial'

export function TestimonialPage() {
  return (
    <section style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          height: '12rem',
          backgroundColor: 'rgb(187,149,147)',
          color: 'white',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          TESTIMONIOS
        </Typography>
        <Typography>¿Qué opinan nuestros clientes?</Typography>
      </Box>

      <section>
        <Testimonial />
      </section>
    </section>
  )
}
