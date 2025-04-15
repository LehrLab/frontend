import type { Meta, StoryObj } from '@storybook/react';
import Input from './input.component.tsx';

const meta = {
  component: Input,
  title: 'Input',
  tags: ['ui'],
  excludeStories: /.*Data$/,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {},
};
