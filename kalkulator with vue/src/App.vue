<template>
  <div>
    <h1>Kalkulator Sederhana</h1>
    <p>Hasil: {{ hasil }}</p>
    <input v-model="angka1" type="number" placeholder="Angka pertama" />
    <input v-model="angka2" type="number" placeholder="Angka kedua" />
    <br /><br />
    <button @click="add">+</button>
    <button @click="subtract">-</button>
    <button @click="multiply">*</button>
    <button @click="divide">/</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      angka1: 0,
      angka2: 0,
      hasil: 0,
    };
  },
  methods: {
    add() {
      this.hasil = this.angka1 + this.angka2;
    },
    subtract() {
      this.hasil = this.angka1 - this.angka2;
    },
    multiply() {
      this.hasil = this.angka1 * this.angka2;
    },
    divide() {
      this.hasil = this.angka1 / this.angka2;
    },
  },
};
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
