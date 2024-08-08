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
        defaultValue="Ingresa tu email"
        variant="standard"
      />
      <TextField
        id="standard-helperText"
        label="Nombre"
        defaultValue="Ingresa tu nombre"
        variant="standard"
      />
      <TextField
        id="standard-helperText"
        label="Apellido"
        defaultValue="Ingresa tu apellido"
        variant="standard"
      />
      <TextField
        id="standard-helperText"
        label="Consulta"
        defaultValue="Ingresa tu consulta"
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
          ':hover': { backgroundColor: 'rgb(187,149,147, 0.8)' },
        }}
      >
        Enviar
      </Button>
    </form>
  )
}
