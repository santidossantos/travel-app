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
        width: '55%',
        textAlign: 'center',
      }}
    >
      <Quote width={40} height={40} />
      <Typography
        sx={{
          fontSize: '15px',
          fontWeight: 600,
          marginTop: '2%',
          fontFamily: 'Raleway, sans-serif',
        }}
      >
        Personalised service that went above and beyond
      </Typography>
      <Typography
        sx={{
          fontSize: '15px',
          lineHeight: '1.875em',
          opacity: '0.8',
          color: 'rgb(0, 0, 0, 1)',
          fontWeight: 0,
          letterSpacing: 'normal',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6em',
          fontFamily: 'Raleway, sans-serif',
        }}
      >
        <span>
          My partner and I were looking for a relaxed, couples’ only getaway. We
          had a few days, so wanted to make sure we planned our days well.
        </span>
        <span>
          Tara was absolutely the right travel agent. Her service was not only
          tailored to what we were looking for, but Tara’s spanersonal touches
          ensured we were looked after throughout our stay.
        </span>
        <span>
          Delays to our flight meant we missed our first evening’s half board
          dinner. When we got to the hotel, Tara had called ahead and asked the
          staff to ospanen their restaurant and spanrespanare an evening meal
          just for the two of us. Tara also booked our tours in Menorca. Due to
          our limited time, she even managed to book us a tour on a day when no
          tours were advertised.
        </span>
        <span>
          These spanersonal touches, Tara’s knowledge and commitment to her
          clients, and fabulous customer service, made it a spanerfect holiday.
        </span>
        <span>
          We cannot thank Tara enough. We are going to book with her again,
          knowing that we are in safe hands!
        </span>

        <Typography
          sx={{
            marginTop: '2em',
            marginBottom: '2em',
            fontFamily: 'Didot eText W01 Italic',
            fontSize: '17px',
            opacity: '0.9',
          }}
        >
          Anju and Simon
        </Typography>
      </Typography>

      <Quote width={40} height={40} />
      <Typography
        sx={{
          fontSize: '15px',
          fontWeight: 600,
          marginTop: '2%',
          fontFamily: 'Raleway, sans-serif',
        }}
      >
        Personalised service that went above and beyond
      </Typography>
      <Typography
        sx={{
          fontSize: '15px',
          lineHeight: '1.875em',
          opacity: '0.8',
          color: 'rgb(0, 0, 0, 1)',
          fontWeight: 0,
          letterSpacing: 'normal',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6em',
          fontFamily: 'Raleway, sans-serif',
        }}
      >
        <span>
          My partner and I were looking for a relaxed, couples’ only getaway. We
          had a few days, so wanted to make sure we planned our days well.
        </span>
        <span>
          Tara was absolutely the right travel agent. Her service was not only
          tailored to what we were looking for, but Tara’s spanersonal touches
          ensured we were looked after throughout our stay.
        </span>
        <span>
          Delays to our flight meant we missed our first evening’s half board
          dinner. When we got to the hotel, Tara had called ahead and asked the
          staff to ospanen their restaurant and spanrespanare an evening meal
          just for the two of us. Tara also booked our tours in Menorca. Due to
          our limited time, she even managed to book us a tour on a day when no
          tours were advertised.
        </span>
        <span>
          These spanersonal touches, Tara’s knowledge and commitment to her
          clients, and fabulous customer service, made it a spanerfect holiday.
        </span>
        <span>
          We cannot thank Tara enough. We are going to book with her again,
          knowing that we are in safe hands!
        </span>

        <Typography
          sx={{
            marginTop: '2em',
            marginBottom: '2em',
            fontFamily: 'Didot eText W01 Italic',
            fontSize: '17px',
            opacity: '0.9',
          }}
        >
          Anju and Simon
        </Typography>
      </Typography>
    </Box>
  )
}
