import { CommentBoxProps } from "./comment-box-props";

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
  comments: CommentBoxProps[]
}
