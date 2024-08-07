import { Button, TextField } from '@mui/material'

export function ContactForm() {
  return (
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
  )
}
