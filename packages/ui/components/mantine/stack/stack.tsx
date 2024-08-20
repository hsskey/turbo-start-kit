import { PropsWithChildren } from 'react'
import type { StackProps as MantineStackProps } from '@mantine/core'
import { Stack as MantineStack } from '@mantine/core'

interface StackProps extends MantineStackProps, PropsWithChildren {}

export function Stack({ children, ...props }: StackProps) {
  return <MantineStack {...props}>{children}</MantineStack>
}
