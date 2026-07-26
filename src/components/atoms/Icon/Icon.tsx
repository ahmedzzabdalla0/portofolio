import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type IconWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700
type IconFill = 0 | 1

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string
  weight?: IconWeight
  fill?: IconFill
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeMap: Record<NonNullable<IconProps['size']>, string> = {
  sm: 'text-base',
  md: 'text-2xl',
  lg: 'text-4xl',
  xl: 'text-6xl',
}

function Icon({ name, weight = 400, fill = 0, size = 'md', className, style, ...rest }: IconProps) {
  return (
    <span
      className={cn('material-symbols-outlined', sizeMap[size], className)}
      style={{
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
        ...style,
      }}
      aria-hidden="true"
      {...rest}
    >
      {name}
    </span>
  )
}

export { Icon }
export type { IconProps }
