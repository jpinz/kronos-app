<template>
  <h1>Welcome {{role}} of {{company}}!!</h1>
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
