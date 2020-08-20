<template>
  <h1>Select a task group to begin!!</h1>
</template>

<script>
import data from "../site.json";
export default {
  name: "FinishPage",
  data() {
    return {
      company: data.company,
      role: data.role,
    };
  },
  computed: {},
};
</script>
