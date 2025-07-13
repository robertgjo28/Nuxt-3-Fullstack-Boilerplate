<script setup>
const colorMode = useColorMode()

const colorOptions = [
  { label: 'System', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'Sepia', value: 'sepia' },
]
</script>

<template>
  <div class="p-4 max-w-sm mx-auto">
    <h2 class="mb-4 text-lg font-semibold">
      Color Mode: {{ colorMode.preference }}
    </h2>

    <USelect
      v-model="colorMode.preference"
      :items="colorOptions"
      clearable
      label="Select color mode"
    />
  </div>
</template>

<style>
/* Sepia mode example */
.sepia-mode {
  background-color: #f1e7d0 !important;
  color: #433422 !important;
}

/* You can override the dark mode colors if you want */
.dark-mode {
  background-color: #091a28 !important;
  color: #ebf4f1 !important;
}
</style>
