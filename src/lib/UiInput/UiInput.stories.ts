// src/lib/UiInput/UiInput.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import UiInput from './UiInput.vue';

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  argTypes: {
    modelValue: { control: 'text' },
    isDisabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    modelValue: '',
    isDisabled: false,
    placeholder: 'Введите текст...',
  },
};

export default meta;

type Story = StoryObj<typeof UiInput>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    placeholder: 'Недоступно',
  },
};

export const WithValue: Story = {
  args: {
    modelValue: '192.168.1.1',
  },
};