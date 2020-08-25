<template>
  <div class="columns">
    <div class="column is-2 box" id="sidebar">
      <section class="hero is-bold">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">{{role}}</h1>
            <h2 class="subtitle">{{company}}</h2>
          </div>
        </div>
      </section>
      <SidebarNav />
    </div>
    <div class="column">
      <div class="container">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import data from "../site.json";
export default {
  name: "DefaultLayout",
  data() {
    return {
      company: data.company,
      role: data.role,
    };
  },
  computed: {},
};
</script>

<style scoped>
#sidebar {
  height: 100vh;
}
</style>