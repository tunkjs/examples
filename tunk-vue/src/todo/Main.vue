<template>
  <section>
  	<ul>
      <li></li>
    </ul>
  </section>
</template>
<script>
export default {
  state: ["todo"],

  created() {
      this.dispatch('todo.getList');
  },

  methods: {}
};
</script>