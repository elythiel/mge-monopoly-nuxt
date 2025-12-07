export interface CardContent {
  color: string
  duration?: string
  header: string
  title: string
  location: string
  footer?: string
  period: string
  card?: boolean
  image?: CardContentImage
}
export interface CardContentImage {
  name: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}
