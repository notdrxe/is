<template>
  <button
    :type="type"
    :disabled="isDisabled"
    :data-layout="layout"
    class="ui-button"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout: 'primary' | 'secondary';
  isDisabled: boolean;
  type: 'submit' | 'button';
}

const props = defineProps<IProps>();
</script>

<style scoped>
.ui-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  background: var(--color-button-secondary);
  color: var(--color-text);

  &[data-layout='primary'] {
    background: var(--color-button-primary);
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>