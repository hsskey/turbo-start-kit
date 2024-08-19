import { PetsPage } from './pets'
import type { Meta, StoryObj } from '@storybook/react'
import { getPetsListMockHandler } from './generated/petstore'

const meta: Meta<typeof PetsPage> = {
  title: 'Example/PetsPage',
  component: PetsPage,
  parameters: {
    msw: {
      handlers: [getPetsListMockHandler()]
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
