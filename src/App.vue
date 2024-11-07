<template>
  <div>
    <Menubar :model="menuItems" class="app__menu" />
    <Toast position="bottom-right" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Toast from 'primevue/toast'
import Menubar from 'primevue/menubar'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuItems = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push('/')
    },
  },
  {
    label: 'History',
    icon: 'pi pi-history',
    command: () => {
      router.push('/history')
    },
  },
])
</script>

<style>
.app__menu {
  margin-bottom: 20px;
}
</style>
