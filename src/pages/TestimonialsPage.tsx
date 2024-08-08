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
          gap: '1.8rem',
          height: '10rem',
          backgroundColor: 'rgb(187,149,147)',
          color: 'white',
          padding: '15px',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontSize: '2.4rem',
            fontFamily: 'Playfair Display',
            marginTop: '2%',
          }}
        >
          TESTIMONIOS
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '16px',
            fontFamily: 'Didot eText W01 Italic',
            lineHeight: '1.7',
            opacity: '0.8',
          }}
        >
          ¿Qué piensan nuestros clientes?
        </Typography>
      </Box>

      <section>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.8rem',
            marginTop: '4%',
          }}
        >
          <Testimonial />
        </Box>
      </section>
    </section>
  )
}
