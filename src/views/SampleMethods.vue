<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increase() {
      this.count++
    },
    decrease() {
      this.count--
    },
  },
}
</script>

<template>
  <section class="sample-methods">
    <h2>{{ count }}</h2>
    <button type="button" @click="increase">+</button>
    <button type="button" @click="decrease">-</button>
  </section>
</template>
