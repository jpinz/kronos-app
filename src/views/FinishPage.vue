<template>
  <section>
    <h1 class="title is-1">Finished!</h1>

    <b-button type="is-primary" @click="download">Download</b-button>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FinishPage",
  data() {
    return {};
  },
  computed: mapState({
    role: (state) => state.role,
    taskGroups: (state) => JSON.parse(JSON.stringify(state.taskGroups)),
  }),
  methods: {
    download() {
      let tg = {};
      Object.keys(this.taskGroups).forEach((group, index) => {
        if (this.taskGroups[group].selected) {
          let taskG = this.taskGroups[group];
          let tasks = taskG.tasks;
          delete taskG.selected;
          tasks.forEach((task, index) => {
            console.log(task);
            if (task.selected) {
              delete task.selected;
              delete task.index;
              delete task.group;
            } else {
              tasks.splice(index, 1);
            }
          });
          console.log(taskG);

          tg[group] = taskG;
        }
        if (index == Object.keys(this.taskGroups).length - 1) {
          console.log(tg);
          this.sendData(tg);
        }
      });
    },
    sendData(taskGroups) {
      console.log("downloading...");
      this.axios
        .post("http://localhost:3001/download", {
          role: this.role,
          taskGroups: taskGroups,
        })

        .then(function (response) {
          console.log(response.data);
        })

        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#roles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#role {
  margin: 10px;
}
</style>
