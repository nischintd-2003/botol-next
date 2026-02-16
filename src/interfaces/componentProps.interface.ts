import { StaticImageData } from 'next/image'

export interface BlurCardProps {
  text: string
  number: number
}

export interface VarietyProps {
  text: string
  icon: StaticImageData
}

export interface ProductProps {
  text: string
  image: StaticImageData
}
