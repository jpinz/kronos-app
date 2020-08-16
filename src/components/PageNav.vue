<template>
  <section id="navrow">
    <div id="prev">
      <b-button @click="prevPage" icon-right="chevron-left" />
    </div>

    <div id="next">
      <b-button @click="nextPage" icon-right="chevron-right" />
    </div>
  </section>
</template>

<script>
export default {
  name: "PageNav",
  computed: {},
  methods: {
    nextPage() {
      this.$store.commit("nextPage");
    },
    prevPage() {
      this.$store.commit("prevPage");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navrow {
  display: flex;
  flex-direction: row;
}

#prev {
  display: flex;
  align-self: flex-start;
}

#next {
  display: flex;
  align-self: flex-end;
}
</style>
