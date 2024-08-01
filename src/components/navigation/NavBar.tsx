import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 0.96 }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          backdropFilter: 'blur(30px)',
          padding: 1,
          borderRadius: 4,
          color: 'white',
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,1) 35%, rgba(212,236,223,1) 100%)',
        }}
      >
        <Toolbar>
          <img
            src="https://i.ibb.co/WDNpKR0/TRIPFINDER-120-x-66-px.png"
            style={{ transform: 'scale(0.5)' }}
          />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
