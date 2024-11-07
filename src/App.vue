<script setup lang="ts">
import { RouterView } from 'vue-router'
import Toast from 'primevue/toast'
</script>

<template>
  <div>
    <Toast position="bottom-right" />
    <RouterView />
  </div>
</template>
