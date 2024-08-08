import { Box, ImageList, ImageListItem } from '@mui/material'
import { CityItemProps } from '../../interfaces/city-item-props'
import { CityDescription } from './CityDescription' // Asegúrate de que la ruta sea correcta

interface GalleryProps {
  city: CityItemProps
}

export function Gallery({ city }: GalleryProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        maxWidth: '100%',
      }}
    >
      <CityDescription city={city} />
      <ImageList
        sx={{
          width: '100%', // Hace que el ImageList ocupe todo el ancho disponible
          height: 'auto', // Ajusta la altura automáticamente
        }}
        variant="quilted"
        cols={3} // Ajusta el número de columnas según el diseño deseado
        rowHeight={300} // Altura de cada fila
      >
        {city.photos.map((photo) => (
          <ImageListItem
            key={photo.src}
            sx={{
              width: '100%', // Hace que el ImageListItem ocupe todo el ancho del contenedor
              height: 300, // Establece una altura fija para cada imagen
              overflow: 'hidden', // Evita que las imágenes se desborden
            }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              style={{
                width: '100%', // Ajusta el ancho de la imagen al ancho del contenedor
                height: '100%', // Ajusta la altura de la imagen al alto del contenedor
                objectFit: 'cover', // Mantiene la proporción y cubre el área del contenedor
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
