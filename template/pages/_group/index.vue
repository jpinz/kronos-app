<template>
  <h1>Welcome {{role}} of {{company}}!!</h1>
</template>

<script>
export default {
  name: "Group",
  props: ["group"],
  data() {
    return {
      tasks: group.tasks,
    };
  },
  computed: {},
};
</script>
