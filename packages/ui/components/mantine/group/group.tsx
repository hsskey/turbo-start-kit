import { PropsWithChildren } from 'react'
import type { GroupProps as MantineGroupProps } from '@mantine/core'
import { Group as MantineGroup } from '@mantine/core'

interface GroupProps extends MantineGroupProps, PropsWithChildren {}

export function Group({ children, ...props }: GroupProps) {
  return <MantineGroup {...props}>{children}</MantineGroup>
}
