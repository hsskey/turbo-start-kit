import { PropsWithChildren } from 'react'
import type { ButtonProps as MantineButtonProps } from '@mantine/core'
import { Button as MantineButton } from '@mantine/core'

interface ButtonProps extends MantineButtonProps, PropsWithChildren {}

export function Button({ children, ...props }: ButtonProps) {
  return <MantineButton {...props}>{children}</MantineButton>
}
