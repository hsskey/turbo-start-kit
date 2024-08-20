import { PropsWithChildren } from 'react'
import type { TitleProps as MantineTitleProps } from '@mantine/core'
import { Title as MantineTitle } from '@mantine/core'

interface TitleProps extends MantineTitleProps, PropsWithChildren {}

export function Title({ children, ...props }: TitleProps) {
  return <MantineTitle {...props}>{children}</MantineTitle>
}
