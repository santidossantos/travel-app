import { Box, Button, TextField, Typography } from '@mui/material'

export function ContactForm() {
  return (
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
      <form
        noValidate
        autoComplete="off"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          width: '80%',
          maxWidth: '780px',
        }}
      >
        <TextField
          id="standard-helperText"
          label="Email"
          defaultValue="Enter your email"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Name"
          defaultValue="Enter your name"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Name"
          defaultValue="Enter your name"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Name"
          defaultValue="Enter your name"
          variant="standard"
          multiline
          rows={4}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: 'rgb(137 89 86)',
            padding: '0.6rem 0',
            borderRadius: '0',
            fontFamily: 'Raleway, sans-serif',
            fontSize: '1rem',
            fontWeight: '400',
            textTransform: 'none',
          }}
        >
          Enviar
        </Button>
      </form>
    </Box>
  )
}
