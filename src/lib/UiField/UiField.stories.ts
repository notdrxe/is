// src/lib/UiField/UiField.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import UiField from 'src/lib/UiField/UiField.vue';
import UiInput from 'src/lib/UiInput/UiInput.vue';
import UiSelect from 'src/lib/UiSelect/UiSelect.vue';

const meta: Meta<typeof UiField> = {
  component: UiField,
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Поле ввода',
  },
};

export default meta;

type Story = StoryObj<typeof UiField>;

export const WithInput: Story = {
  render: (args) => ({
    components: { UiField, UiInput },
    setup() {
      return { args, value: '' };
    },
    template: `
      <UiField v-bind="args">
        <UiInput v-model="value" placeholder="Введите IP..." />
      </UiField>
    `,
  }),
};

export const WithSelect: Story = {
  render: (args) => ({
    components: { UiField, UiSelect },
    setup() {
      const options = ['24 / 255.255.255.0', '25 / 255.255.255.128'];
      return { args, value: options[0], options };
    },
    template: `
      <UiField v-bind="args">
        <UiSelect v-model="value" :options="options" />
      </UiField>
    `,
  }),
  args: {
    label: 'Маска подсети',
  },
};