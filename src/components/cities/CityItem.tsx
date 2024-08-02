import '../../styles/cities/CityItem.css'
import { CityItemProps } from '../../interfaces/city-item-props'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export function CityItem({ title, subtitle, imageUrl }: CityItemProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
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
      <CardMedia component="img" height="194" image={imageUrl} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  )
}
