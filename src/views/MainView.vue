<template>
  <InfoComponent v-if="serverError" :text="'Server Error. Please reload page'" />
  <div v-else>
    <div class="main-view__btn-section">
      <Button
        v-tooltip.bottom="'Update quote'"
        icon="pi pi-refresh"
        severity="secondary"
        @click="updateQoute()"
      />
    </div>

    <QouteComponent v-if="isLoading" :loading="true" />
    <QouteComponent v-else :author="qoute.author" :content="qoute.content" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QouteComponent from '../components/QouteComponent.vue'
import Button from 'primevue/button'
import { useToast } from 'primevue/usetoast'
import type { Qoute } from '../models/qoute.model.ts'
import InfoComponent from '../components/InfoComponent.vue'

import { qouteStore } from '../store/qoute.store.ts'

const toast = useToast()
const qoute = ref<Qoute>(null)
const serverError = ref(false)
const isLoading = ref(true)

function showNotification(type: 'success' | 'error', msg: string): void {
  toast.add({ severity: type, summary: msg, life: 3000 })
}

function updateQoute(): void {
  isLoading.value = true
  fetch('https://api.quotable.io/quotes/random', {
    method: 'GET',
  })
    .then((response) => {
      if (response.ok) {
        serverError.value = false
        return response.json()
      }
      throw new Error()
    })
    .then((data) => {
      const { author, content } = data[0]
      const qouteInfo = {
        author,
        content,
      }
      qoute.value = qouteInfo
      qouteStore.addQoute(qouteInfo)
    })
    .catch((error) => {
      serverError.value = true
      showNotification('error', 'Server error')
    })
    .finally(() => {
      isLoading.value = false
    })
}

updateQoute()
</script>

<style>
.main-view__btn-section {
  display: flex;
  justify-self: flex-end;
  gap: 10px;
  margin-bottom: 10px;
}
</style>
