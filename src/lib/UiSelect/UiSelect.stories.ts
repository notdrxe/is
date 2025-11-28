// src/lib/UiSelect/UiSelect.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import UiSelect from './UiSelect.vue';

const options = [
  '24 / 255.255.255.0',
  '25 / 255.255.255.128',
  '26 / 255.255.255.192',
];

const meta: Meta<typeof UiSelect> = {
  component: UiSelect,
  argTypes: {
    modelValue: { control: 'select', options },
    isDisabled: { control: 'boolean' },
    options: { control: 'object' },
  },
  args: {
    modelValue: options[0],
    isDisabled: false,
    options,
  },
};

export default meta;

type Story = StoryObj<typeof UiSelect>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    modelValue: options[1],
  },
};