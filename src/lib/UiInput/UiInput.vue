<!-- src/lib/UiInput/UiInput.vue -->
<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :data-disabled="isDisabled"
    class="ui-input"
    @input="onInput"
  />
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  placeholder?: string;
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
  placeholder: '',
});

const emit = defineEmits<IEmit>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<style scoped>
.ui-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: white;
  color: var(--color-text);

  &[data-disabled='true'] {
    background: var(--color-disabled);
    cursor: not-allowed;
  }
}
</style>