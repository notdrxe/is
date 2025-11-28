<!-- src/lib/UiField/UiField.vue -->
<template>
  <div class="ui-field">
    <label class="ui-field__label">{{ label }}</label>
    <div class="ui-field__control">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<style scoped>
.ui-field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.ui-field__label {
  font-weight: 600;
  color: var(--color-text);
}

.ui-field__control {
  width: 100%;
}
</style>