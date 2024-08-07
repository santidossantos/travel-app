import { Box, InputLabel, TextField, Typography } from '@mui/material'

export function ContactForm() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        padding: '3rem',
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
        }}
      >
        CONTACTO
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          id="standard-helperText"
          label="Name"
          defaultValue="Enter your name"
          variant="standard"
        />
      </form>
    </Box>
  )
}
