<template>
  <div>
    <!-- <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">{{ group }}</h1>
        </div>
      </div>
    </section> -->

    <Title :title="group" />
    <br />
    <div v-if="tasks.length > 0" :class="gridStyle">
      <div v-for="task in tasks" class="card-item" :key="task">
        <TaskCard v-bind:task="task" />
      </div>
    </div>
    <div v-else class="container">
      <div class="notification">
        <b-icon pack="fas" icon="frown" size="is-large"> </b-icon>
        No selected <strong>tasks</strong> for this <strong>task group</strong>.
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../site.json";
import TaskCard from "@/components/TaskCard.vue";
import Title from "@/components/Title.vue";

export default {
  name: "Group",
  components: {
    TaskCard,
    Title
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
      return `grid grid-cols-${this.gridSize(this.tasks)} gap-4`;
    }
  },
  methods: {
    gridSize(tasks) {
      let length = tasks.length;
      if (length == 1) {
        // One tile width
        return "1";
      } else if (length == 2) {
        // Two tile width
        return "2";
      } else if (length >= 3) {
        // Three tile width
        return "3";
      }
      return "1";
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
