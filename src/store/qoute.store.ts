import type { Qoute } from '@/models/qoute.model'
import { reactive } from 'vue'

interface StoreModel {
  qoutes: Qoute[]
  addQoute: (qoute: Qoute) => void
}

export const qouteStore = reactive<StoreModel>({
  qoutes: [],
  addQoute(qoute: Qoute): void {
    this.qoutes.push(qoute)
  },
})
