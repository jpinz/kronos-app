<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{company}}</h1>
          <h2 class="subtitle">{{role}}</h2>
        </div>
      </div>
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
