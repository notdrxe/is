<template>
  <select
    :value="modelValue"
    :disabled="isDisabled"
    :data-disabled="isDisabled"
    class="ui-select"
    @change="onChange"
  >
    <option
      v-for="option in options"
      :key="option"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  options: string[];
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
});

const emit = defineEmits<IEmit>();

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
}
</script>

<style scoped>
.ui-select {
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