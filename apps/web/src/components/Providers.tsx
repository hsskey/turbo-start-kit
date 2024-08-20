'use client'

import { PropsWithChildren } from 'react'
import { Provider as MantineProvider } from '@repo/ui'

type ProvidersProps = PropsWithChildren

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <MantineProvider>{children}</MantineProvider>
    </>
  )
}
