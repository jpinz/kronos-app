<template>
  <div class="sidebar-page">
    <section class="sidebar-layout">
      <b-sidebar position="static" type="is-light" fullheight open>
        <div class="p-1">
          <div class="block">
            <img
              src="https://www.betterbuys.com/wp-content/uploads/2015/11/Kronos.png"
              alt="Kronos Logo"
            />
          </div>
          <h2>Creating for {{role}}</h2>
        </div>
      </b-sidebar>
    </section>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {},
  computed: {
    pageTitle() {
      return this.$store.state.pageTitle;
    },
    role() {
      return this.$store.state.role;
    },
  },
  methods: {},
};
</script>

<style>
.p-1 {
  padding: 1em;
}
.sidebar-page {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
}
</style>
