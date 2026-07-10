import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { TriangleYroise } from '@/components/ui/triangle-yroise'
import { cn } from '@/lib/utils'

function triangleColor(
  variant: 'primary' | 'secondary' | 'ghost',
  inverted: boolean,
  disabled: boolean
) {
  if (disabled) return 'rgb(var(--color-border))'
  if (variant === 'secondary' && inverted) return 'rgb(var(--color-text-on-dark))'
  if (variant === 'primary' && inverted) return 'rgb(var(--glaz-700))'
  if (variant === 'primary') return 'rgb(var(--glaz-500))'
  return 'rgb(var(--color-text))'
}

const buttonVariants = cva(
  'inline-flex items-center whitespace-nowrap font-outfit text-[length:var(--button-font-size)] font-medium tracking-button transition-all duration-150 ease-in-out rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glaz-700/30 disabled:cursor-not-allowed disabled:opacity-[0.45]',
  {
    variants: {
      variant: {
        primary:
          'bg-text text-on-dark hover:bg-[rgb(var(--color-button-primary-hover))]',
        secondary:
          'border-[1.5px] border-solid border-list-separator/20 bg-transparent text-text hover:border-text group-hover:border-text',
        ghost: 'bg-transparent text-text hover:underline',
      },
      size: {
        default: 'h-11 gap-3 pl-6 pr-5',
        sm: 'h-9 gap-2.5 pl-[18px] pr-3.5',
      },
      inverted: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        inverted: true,
        class:
          'bg-background text-text hover:bg-background/90 hover:text-text',
      },
      {
        variant: 'secondary',
        inverted: true,
        class:
          'border-on-dark/20 text-on-dark hover:border-on-dark group-hover:border-on-dark',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      inverted: false,
    },
  }
)

const triangleSizeByButtonSize = {
  default: 10,
  sm: 8,
} as const

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  /** Triangle Yroise à droite du libellé (défaut : true). */
  showTriangle?: boolean
  /** Primary inversé pour fonds sombres (footer, hero). */
  inverted?: boolean
}

export function Button({
  className,
  variant = 'primary',
  size = 'default',
  inverted = false,
  showTriangle = true,
  asChild = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const resolvedVariant = variant ?? 'primary'
  const resolvedSize = size ?? 'default'
  const classes = cn(
    buttonVariants({ variant: resolvedVariant, size: resolvedSize, inverted })
  )
  const triangle = showTriangle ? (
    <TriangleYroise
      color={triangleColor(resolvedVariant, inverted, Boolean(disabled))}
      size={triangleSizeByButtonSize[resolvedSize]}
    />
  ) : null

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{
      className?: string
      children?: React.ReactNode
    }>
    return React.cloneElement(child, {
      className: cn(classes, className, child.props.className),
      ...(disabled ? { 'aria-disabled': true, tabIndex: -1 } : {}),
      children: (
        <>
          {child.props.children}
          {triangle}
        </>
      ),
    })
  }

  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={cn(classes, className)} disabled={disabled} {...props}>
      {children}
      {triangle}
    </Comp>
  )
}
