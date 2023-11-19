export enum AvatarStyle {
  NORMAL = 'normal',
  STROKED = 'stroked',
}

export interface AvatarProps {
  username: string
  url?: string
  style?: AvatarStyle
  icon?: string
  logoUrl?: string
  logoText?: string
  className?: string
  alt?: string
  onClick?: () => void
  size?: number
  noTooltip?: boolean
}
