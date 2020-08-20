<template>
  <div>
    <b-button v-for="group in taskGroups" :key="group">{{group}}</b-button>
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
      return Object.keys(data.taskGroups);
    },
  },
};
</script>
