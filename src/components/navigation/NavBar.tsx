import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { NavItemProps } from '../../interfaces/nav-item-props'
import Divider from '@mui/material/Divider'

export default function NavBar({ navItems }: { navItems: NavItemProps[] }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          height: 235,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'white',
          color: 'rgb(62,62,62)',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <img
            src="https://static.wixstatic.com/media/19b022_db51b8dad80040fc8afa14a0c1d1f377~mv2.gif"
            width={204}
            height={120}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {navItems.map((item: NavItemProps) => (
              <Typography
                key={item.label}
                component="a"
                href={item.href}
                sx={{
                  fontFamily: 'Aceh',
                  fontSize: '1em',
                  padding: '2px 16px',
                  color: 'rgb(62,62,62)',
                  textDecoration: 'none',
                  transition: 'background-color 0.5s ease',
                  ':hover': { backgroundColor: 'rgb(187,149,147, 0.8)' },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Divider orientation="horizontal" flexItem />
    </Box>
  )
}
