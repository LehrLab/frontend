import type { Meta, StoryObj } from '@storybook/react';
import Button from './button.component';

const meta = {
  component: Button,
  title: 'Button',
  tags: ['ui'],
  excludeStories: /.*Data$/,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {},
};
