import type { Meta, StoryObj } from '@storybook/vue3';
import UiButton from './UiButton.vue';

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  argTypes: {
    layout: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    isDisabled: { control: 'boolean' },
    type: { control: 'select', options: ['button', 'submit'] },
  },
};

export default meta;

type Story = StoryObj<typeof UiButton>;

export const Primary: Story = {
  args: {
    layout: 'primary',
    isDisabled: false,
    type: 'button',
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: '<UiButton v-bind="args">Кнопка</UiButton>',
  }),
};

export const Disabled: Story = {
  args: {
    layout: 'primary',
    isDisabled: true,
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: '<UiButton v-bind="args">Отключено</UiButton>',
  }),
};