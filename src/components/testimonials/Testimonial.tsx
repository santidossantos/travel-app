import { Box, Typography } from '@mui/material'
import { Quote } from './Quote'

export function Testimonial() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.8em',
        width: '60%',
        textAlign: 'center',
        fontFamily: 'Raleway, sans-serif',
      }}
    >
      <Quote width={40} height={40} />
      <Typography
        sx={{
          fontSize: '15px',
          fontWeight: 600,
          marginTop: '2%',
        }}
      >
        Personalised service that went above and beyond
      </Typography>
      <Typography
        sx={{
          fontSize: '15px',
          lineHeight: '1.875em',
          opacity: '0.8',
          fontWeight: 200,
          letterSpacing: 'normal',
        }}
      >
        My partner and I were looking for a relaxed, couples’ only getaway. We
        had a few days, so wanted to make sure we planned our days well. Tara
        was absolutely the right travel agent. Her service was not only tailored
        to what we were looking for, but Tara’s personal touches ensured we were
        looked after throughout our stay. Delays to our flight meant we missed
        our first evening’s half board dinner. When we got to the hotel, Tara
        had called ahead and asked the staff to open their restaurant and
        prepare an evening meal just for the two of us. Tara also booked our
        tours in Menorca. Due to our limited time, she even managed to book us a
        tour on a day when no tours were advertised. These personal touches,
        Tara’s knowledge and commitment to her clients, and fabulous customer
        service, made it a perfect holiday. We cannot thank Tara enough. We are
        going to book with her again, knowing that we are in safe hands! Anju
        and Simon
      </Typography>
    </Box>
  )
}
