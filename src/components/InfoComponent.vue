<template>
  <div class="info-component__no-data">
    <i class="pi pi-info-circle" style="font-size: 2.5rem">{{ text }}</i>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
})
</script>

<style>
.info-component__no-data {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
</style>
