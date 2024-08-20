import { PropsWithChildren } from 'react'
import type { TextProps as MantineTextProps } from '@mantine/core'
import { Text as MantineText } from '@mantine/core'

interface TextProps extends MantineTextProps, PropsWithChildren {}

export function CustomText({ children, ...props }: TextProps) {
  return <MantineText {...props}>{children}</MantineText>
}
