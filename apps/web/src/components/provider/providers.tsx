'use client'

import { PropsWithChildren } from 'react'
import { Provider as MantineProvider } from '@repo/ui'
import { MultiProvider } from '@src/components/provider/multi-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type ProvidersProps = PropsWithChildren

const queryClient = new QueryClient()

export default function Providers({ children }: ProvidersProps) {
  const providers = [
    <MantineProvider key="mantine" />,
    <QueryClientProvider client={queryClient} key="react-query" />
  ]
  return (
    <>
      <MultiProvider providers={providers}>{children}</MultiProvider>
    </>
  )
}
