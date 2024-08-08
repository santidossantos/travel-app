import { Box, Typography } from '@mui/material'
import { ContactForm } from '../components/contact/ContactForm'

export function ContactPage() {
  return (
    <section>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          padding: '3rem 0',
          width: '100%',
        }}
      >
        <img
          src="https://static.wixstatic.com/media/c7f09d0660b8446f98c46147c2cc3452.jpg/v1/fill/w_1880,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/New%20York%20City.jpg"
          alt="New York City"
          style={{ width: '65%', height: 'auto' }}
        />
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Playfair Display',
            fontSize: '2.5rem',
            fontWeight: '600',
            marginTop: '2rem',
            letterSpacing: '0.2rem',
          }}
        >
          CONTACTO
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '15px',
            fontFamily: 'Raleway, sans-serif',
            fontWeight: '300',
            gap: '0.6rem',
            alignItems: 'center',
            marginTop: '-0.8rem',
          }}
        >
          <span>info@triptavel.com</span>
          <span>Teléfono: +54 9 1234567890</span>
        </Box>

        <ContactForm />
      </Box>
    </section>
  )
}
