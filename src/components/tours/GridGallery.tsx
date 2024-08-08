import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'

export function GridGallery() {
  return (
    <ImageList sx={{ width: '90%' }} gap={50}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

const itemData = [
  {
    img: 'https://media.traveler.es/photos/61375f04ea50dbd37eade9a7/master/w_320%2Cc_limit/213200.jpg',
    title: 'Ámsterdam, Holanda',
    author: '@javierm',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://media.traveler.es/photos/61375f03ea50dbd37eade9a3/master/w_320%2Cc_limit/213176.jpg',
    title: 'Beijing, China',
    author: '@gettyimages',
  },
  {
    img: 'https://media.traveler.es/photos/61375f04c4f3d957866678a5/master/w_320%2Cc_limit/213190.jpg',
    title: 'Ciudad del Cabo, Sudáfrica',
    author: '@helloimnik',
  },
  {
    img: 'https://media.traveler.es/photos/61375f04c4f3d957866678a8/master/w_320%2Cc_limit/213216.jpg',
    title: 'Cartagena, Colombia',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://media.traveler.es/photos/61375f04c4f3d957866678a9/master/w_320%2Cc_limit/213179.jpg',
    title: 'Doha, Qatar',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://media.traveler.es/photos/61375f05ba2a75fcba4bdd3d/master/w_320%2Cc_limit/213187.jpg',
    title: 'Dubrovnik, Croacia',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://media.traveler.es/photos/61375f05ea50dbd37eade9ad/master/w_320%2Cc_limit/213226.jpg',
    title: 'Edimburgo, Escocia',
    author: '@tjdragotta',
  },
  {
    img: 'https://media.traveler.es/photos/61375f05ba2a75fcba4bdd40/master/w_320%2Cc_limit/213174.jpg',
    title: 'Hanoi, Vietnam',
    author: '@katie_wasserman',
  },
  {
    img: 'https://media.traveler.es/photos/61375f05ba2a75fcba4bdd42/master/w_320%2Cc_limit/213229.jpg',
    title: 'Jaipur, India',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://media.traveler.es/photos/61375f05f00fb1ba8d8667a9/master/w_320%2Cc_limit/213231.jpg',
    title: 'Kioto, Japón',
    author: '@shelleypauls',
  },
  {
    img: 'https://media.traveler.es/photos/61375f06bae07f0d8a492434/master/w_320%2Cc_limit/213234.jpg',
    title: 'París, Francia',
    author: '@peterlaster',
  },
  {
    img: 'https://media.traveler.es/photos/61375f06ea50dbd37eade9b6/master/w_320%2Cc_limit/213240.jpg',
    title: 'Río de Janeiro, Brasil',
    author: '@southside_customs',
    cols: 2,
  },
]
