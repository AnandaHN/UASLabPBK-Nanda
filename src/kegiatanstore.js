import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();

export const useKegiatanStore = defineStore('kegiatan', {
  state: () => ({
    kegiatan: [
      { id: 0, text: 'Membuat Tugas 4 & 5 pbk', done: true },
    ]
  }),
  actions: {
    addKegiatan(kegiatan) {
      this.kegiatan.push(kegiatan);
    },
    removeKegiatan(kegiatan) {
      this.kegiatan = this.kegiatan.filter(item => item !== kegiatan);
    },
    clearKegiatan() {
      this.kegiatan = [];
    }
  },
  getters: {
    getKegiatanCount() {
      return this.kegiatan.length;
    },
    getCompletedKegiatan() {
      return this.kegiatan.filter(item => item.done);
    }
  }
});