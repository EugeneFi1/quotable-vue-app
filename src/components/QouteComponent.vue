<template>
  <Card v-if="loading">
    <template #title><Skeleton height="25px" /></template>
    <template #content>
      <p class="m-0">
        <Skeleton height="30px" />
      </p>
    </template>
  </Card>

  <Card v-else>
    <template #title>
      <div class="qoute-component__title">
        {{ author }}
        <Button
          v-tooltip.bottom="'Copy to clipboard'"
          icon="pi pi-copy"
          severity="secondary"
          @click="copyQouteToClipboard()"
        />
      </div>
    </template>
    <template #content>
      <p class="m-0">
        {{ content }}
      </p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import type { QouteComponentProps } from '../models/qoute.model.ts'
import Skeleton from 'primevue/skeleton'
import Button from 'primevue/button'
import copy from 'copy-to-clipboard'
import { TOAST_LIFE } from '../utils/toast.const.ts'
import { useToast } from 'primevue/usetoast'

const props = defineProps<QouteComponentProps>()

const toast = useToast()

function copyQouteToClipboard(): void {
  copy(props.content)
  toast.add({ severity: 'success', summary: 'Copied to clipboard', life: TOAST_LIFE })
}
</script>

<style>
.qoute-component__title {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
</style>
