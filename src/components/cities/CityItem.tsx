import { CityItemProps } from '../../interfaces/city-item-props'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'

interface CityItemPropsExtended extends CityItemProps {
  onClick?: () => void
  sx?: SxProps
}

export function CityItem({
  title,
  subtitle,
  imageUrl,
  onClick,
  sx,
}: CityItemPropsExtended) {
  return (
    <Card
      sx={{ width: 345, boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)', ...sx }}
      onClick={onClick}
    >
      <CardHeader
        sx={{
          height: 90,
        }}
        title={
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Playfair Display',
              fontSize: '1.2em',
              color: 'rgb(71, 71, 71)',
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
        }
        subheader={
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Crimson Text',
              fontSize: '1.3em',
              fontStyle: 'italic',
              color: 'rgb(71, 71, 71)',
            }}
          >
            {subtitle}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt={title}
        sx={{
          objectFit: 'cover',
        }}
      />
    </Card>
  )
}
