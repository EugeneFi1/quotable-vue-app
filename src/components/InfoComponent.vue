<template>
  <div class="info-component__no-data">
    <i class="pi pi-info-circle" style="font-size: 2rem"></i>
    <span>{{ text }}</span>
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
  font-size: 2rem;
  gap: 20px;
  line-height: 34px;
}
</style>
