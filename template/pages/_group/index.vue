<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            {{ group }}
          </h1>
        </div>
      </div>
    </section>

    <!-- <div v-for="task in tasks" :key="task">
      <div class="tile">
        <p>{{ task }}</p>
      </div>
    </div> -->
    <div class="tile is-ancestor">
      <div class="tile is-horizontal" v-bind:class="gridSize(tasks)">
        <div v-for="task in tasks" :key="task">
          <div class="tile is-child">
            <p>{{ task }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../site.json";

export default {
  name: "Group",
  data() {
    return {
      group: this.$route.params.group,
      tasks: data.taskGroups[this.$route.params.group].tasks
    };
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
