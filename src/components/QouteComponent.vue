<script setup lang="ts">
import Card from 'primevue/card'
const props = defineProps({
  author: String,
  qoute: String,
})
</script>

<template>
  <Card>
    <template #title>{{ author }}</template>
    <template #content>
      <p class="m-0">
        {{ qoute }}
      </p>
    </template>
  </Card>
</template>
