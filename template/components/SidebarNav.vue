<template>
  <div>
    <!-- <b-button v-for="group in taskGroups" :key="group"></b-button> -->
    <div v-for="group in taskGroups" :key="group">
      <nuxt-link v-bind:to="group">{{ group }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import data from "../site.json";
export default {
  name: "SidebarNav",
  data() {
    return {};
  },
  computed: {
    taskGroups: () => {
      let groups = [];
      Object.keys(data.taskGroups).forEach(group => {
        if (data.taskGroups[group].selected) {
          groups.push(group);
        }
      });
      return groups;
    }
  }
};
</script>
