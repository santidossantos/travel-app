import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Container, Typography, Link, IconButton } from '@mui/material'

export function Footer() {
  return (
    <Box>
      <Container>
        <Typography variant="h6" align="center" gutterBottom>
          <Link
            href="https://github.com/santidossantos"
            color="inherit"
            underline="hover"
          >
            Santiago Dos Santos
          </Link>
          ,
          <Link
            href="https://github.com/paguero8"
            color="inherit"
            underline="hover"
          >
            Paula Agüero
          </Link>
        </Typography>
        <Typography variant="body2" align="center" gutterBottom>
          Contáctanos: (123) 456-7890
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <IconButton href="https://github.com/santidossantos" color="inherit">
            <GitHub />
          </IconButton>
          <IconButton href="https://twitter.com/yourprofile" color="inherit">
            <Twitter />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/yourprofile"
            color="inherit"
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}
