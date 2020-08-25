<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">{{ group }}</h1>
        </div>
      </div>
    </section>

    <br />
    <ul :style="gridStyle" class="card-list">
      <li v-for="task in tasks" class="card-item" :key="task">
        <TaskCard v-bind:task="task" />
      </li>
    </ul>
  </div>
</template>

<script>
import data from "../../site.json";
import TaskCard from "@/components/TaskCard.vue";

export default {
  name: "Group",
  components: {
    TaskCard
  },
  data() {
    return {
      group: this.$route.params.group
    };
  },
  computed: {
    tasks() {
      return data.taskGroups[this.$route.params.group].tasks.filter(task => task.selected);
    },
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(3, minmax(100px, 1fr))`
      };
    }
  },
  methods: {
    gridSize(tasks) {
      let length = tasks.length;
      if (length == 1) {
        // One tile width
        return "is-12";
      } else if (length == 2) {
        // Two tile width
        return "is-8";
      } else if (length >= 3) {
        // Three tile width
        return "is-4";
      }
      return "is-12";
    }
  }
};
</script>

<style scoped>
.card-list {
  display: grid;
  grid-gap: 1em;
}
</style>
