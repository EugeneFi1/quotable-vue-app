<script setup lang="ts">
import Card from 'primevue/card'
import type { Qoute } from '../models/qoute.model.ts'
import Skeleton from 'primevue/skeleton'
const props = defineProps<Qoute>()
</script>

<template>
  <Card v-if="loading">
    <template #title><Skeleton height="20px" /></template>
    <template #content>
      <p class="m-0">
        <Skeleton height="40px" />
      </p>
    </template>
  </Card>

  <Card v-else>
    <template #title>{{ author }}</template>
    <template #content>
      <p class="m-0">
        {{ qoute }}
      </p>
    </template>
  </Card>
</template>
