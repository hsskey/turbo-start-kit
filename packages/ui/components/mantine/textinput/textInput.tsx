import { PropsWithChildren } from 'react'
import type { TextInputProps as MantineTextInputProps } from '@mantine/core'
import { TextInput as MantineTextInput } from '@mantine/core'

interface TextInputProps extends MantineTextInputProps, PropsWithChildren {}

export function TextInput({ children, ...props }: TextInputProps) {
  return <MantineTextInput {...props}>{children}</MantineTextInput>
}
