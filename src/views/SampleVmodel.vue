<script>
export default {
  data() {
    return {
      name: '',
    }
  },
}
</script>

<template>
  <section class="sample-vmodel">
    <label for="sample-name">Name</label>
    <input id="sample-name" v-model="name" type="text" />
    <h2>Hello {{ name }}</h2>
  </section>
</template>
