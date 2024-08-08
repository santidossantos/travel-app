export interface Photo {
  src: string;
  alt: string;
}

export interface CityItemProps {
  title: string
  subtitle: string
  photos: Photo[]
  imageUrl: string
  description: string
}
