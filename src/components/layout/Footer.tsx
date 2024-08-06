import { GitHub } from '@mui/icons-material'
import { Box, Container, Typography, Link, IconButton } from '@mui/material'

export function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(243,236,235)',
        color: 'rgb(71, 71, 71)',
        padding: '25px',
      }}
    >
      <Container>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{
            fontFamily: 'Playfair Display',
            fontSize: '1.3em',
          }}
        >
          Integrantes del grupo
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{
            fontFamily: 'Aceh',
          }}
        >
          <Link
            href="https://www.linkedin.com/in/santiago-dos-santos/"
            color="inherit"
            underline="hover"
          >
            Santiago Dos Santos
          </Link>
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ fontFamily: 'Aceh' }}
        >
          <Link
            href="https://www.linkedin.com/in/agueropaula/"
            color="inherit"
            underline="hover"
          >
            Paula Agüero
          </Link>
        </Typography>
        <Typography
          variant="body2"
          align="center"
          gutterBottom
          sx={{ fontFamily: 'Aceh', fontSize: '1.2em' }}
        >
          info@tripfinder.com
        </Typography>
        <Typography
          variant="body2"
          align="center"
          gutterBottom
          sx={{ fontFamily: 'Aceh', fontSize: '1.2em' }}
        >
          +54 9 1234567890
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <Typography
            variant="body2"
            align="center"
            gutterBottom
            sx={{ fontFamily: 'Aceh', fontSize: '1.2em', fontWeight: 'bold' }}
          >
            Repositorio
          </Typography>
          <IconButton
            href="https://github.com/santidossantos/travel-app"
            color="inherit"
            sx={{
              transform: 'scale(1.5)',
              '&:hover': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
              },
              '&:focus': {
                boxShadow: 'none',
              },
            }}
          >
            <GitHub />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}
