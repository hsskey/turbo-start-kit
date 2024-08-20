import { PropsWithChildren } from 'react'
import { MantineProvider } from '@mantine/core'

type ProvidersProps = PropsWithChildren

export function Provider({ children }: ProvidersProps) {
  return <MantineProvider>{children}</MantineProvider>
}
