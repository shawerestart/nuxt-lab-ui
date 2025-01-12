import type { NuxtLinkProps } from '#app'
import type { Avatar } from './avatar'

export interface VerticalNavigationLink extends NuxtLinkProps {
  label: string
  icon?: string
  iconClass?: string
  avatar?: Avatar
  click?: Function
  badge?: string | number
}
