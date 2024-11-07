<template>
  <div v-if="serverError">Server Error</div>
  <div v-else>
    <div class="btn-section">
      <Button
        v-tooltip.bottom="'Copy to clipboard'"
        icon="pi pi-copy"
        severity="secondary"
        @click="copyQouteToClipboard()"
      />
      <Button
        v-tooltip.bottom="'Update quote'"
        icon="pi pi-refresh"
        severity="secondary"
        @click="updateQoute()"
      />
    </div>

    <QouteComponent :author="auth" :qoute="qoute" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QouteComponent from '../components/QouteComponent.vue'
import Button from 'primevue/button'
import copy from 'copy-to-clipboard'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const auth = ref(null)
const qoute = ref(null)
const serverError = ref(false)

function showNotification(type: 'success' | 'error', msg: string): void {
  toast.add({ severity: type, summary: msg, life: 3000 })
}

function copyQouteToClipboard(): void {
  copy(qoute.value)
  showNotification('success', 'Copied to clipboard')
}

function updateQoute(): void {
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
      auth.value = author
      qoute.value = content
    })
    .catch((error) => {
      serverError.value = true
      showNotification('error', 'Server error')
    })
}

updateQoute()
</script>

<style>
.btn-section {
  display: flex;
  justify-self: flex-end;
  gap: 10px;
}
</style>
