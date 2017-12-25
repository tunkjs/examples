<template>
  <section>
    Clicked: {{ counter.count }} : times
    <button @click="counter_increment">+</button>
    <button @click="counter_decrement">-</button>
    <button @click="decrementAsync">Decrement async</button>
    <br/> <br/>
  </section>
</template>
<style>
button {
  border: solid 1px #ccc;
  background-color: #eee;
}
</style>
<script>
export default {
  state: ["counter"],
  actions: ["counter"],
  created() {
    console.log(this, this.state, this.props);
  },
  methods: {
    decrementAsync() {
      this.counter_decrementAsync();
    }
  }
};
</script>
