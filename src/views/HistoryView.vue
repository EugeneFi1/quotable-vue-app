<script setup lang="ts">
import { qouteStore } from '../store/qoute.store.ts'
import QouteComponent from '../components/QouteComponent.vue'
import ScrollPanel from 'primevue/scrollpanel'
import InfoComponent from '../components/InfoComponent.vue'
</script>

<template>
  <ScrollPanel class="history-view__scroll-panel" v-if="qouteStore.qoutes?.length">
    <QouteComponent
      v-for="qoute in qouteStore.qoutes"
      :author="qoute.author"
      :content="qoute.content"
      class="history-view__scroll-panel_qoute-item"
    />
  </ScrollPanel>
  <InfoComponent v-else :text="'No history'" />
</template>

<style>
.history-view__scroll-panel {
  height: calc(100vh - 90px);
}

.history-view__scroll-panel_qoute-item {
  margin-bottom: 5px;
}
</style>
