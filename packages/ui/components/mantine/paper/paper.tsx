import { PropsWithChildren } from 'react'
import type { PaperProps as MantinePaperProps } from '@mantine/core'
import { Paper as MantinePaper } from '@mantine/core'

interface PaperProps extends MantinePaperProps, PropsWithChildren {}

export function Paper({ children, ...props }: PaperProps) {
  return <MantinePaper {...props}>{children}</MantinePaper>
}
