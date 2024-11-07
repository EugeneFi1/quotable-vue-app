<template>
  <InfoComponent v-if="serverError" :text="'Server Error'" />
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
import { getQoute } from '../services/api.service.ts'
import { TOAST_LIFE } from '../utils/toast.const.ts'

import { qouteStore } from '../store/qoute.store.ts'

const toast = useToast()
const qoute = ref<Qoute>(null)
const serverError = ref(false)
const isLoading = ref(true)

function updateQoute(): void {
  isLoading.value = true
  serverError.value = false

  getQoute()
    .then((data) => {
      const qouteInfo = {
        author: data.author,
        content: data.content,
      }
      qoute.value = qouteInfo
      qouteStore.addQoute(qouteInfo)
    })
    .catch((error) => {
      serverError.value = true
      toast.add({ severity: 'error', summary: 'Server error', life: TOAST_LIFE })
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
