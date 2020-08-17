<template>
  <div class="hello">
    <b-table
      :data="tasks"
      draggable
      @dragstart="dragstart"
      @drop="drop"
      @dragover="dragover"
      @dragleave="dragleave"
    >
      <template slot-scope="props">
        <b-table-column field="name" label="Name">
          <a :href="props.row.link">{{ props.row.name }}</a>
        </b-table-column>
        <b-table-column field="description" label="Description">{{
          props.row.description
        }}</b-table-column>
        <b-table-column field="selected" label="Selected" width="40">
          <!-- <b-icon
            :icon="props.row.selected ? 'checkbox-marked' : 'close-box'"
            :type="props.row.selected ? 'is-success' : 'is-danger'"
          ></b-icon>-->
          <b-checkbox
            v-model="props.row.selected"
            @input="updateSelectedTasks(props.index, props.row)"
          ></b-checkbox>
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large"></b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>

<script>
let draggingRow = undefined;
let draggingRowIndex = -1;
export default {
  name: "SelectTasks",
  props: {
    group: String
  },
  computed: {
    selected() {
      return this.$store.state.taskGroups[this.$props.group].selected;
    },
    tasks() {
      return this.$store.state.taskGroups[this.$props.group].tasks;
    }
  },
  methods: {
    updateSelectedTasks(index, task) {
      task.index = index;
      task.group = this.$props.group;
      this.$store.commit("selectGroupTasks", task);
    },
    dragstart(payload) {
      draggingRow = payload.row;
      draggingRowIndex = payload.index;
    },
    dragover(payload) {
      payload.event.preventDefault();
    },
    dragleave(payload) {
      payload.event.preventDefault();
    },
    drop(payload) {
      const droppedOnRowIndex = payload.index;
      let d = {
        group: this.$props.group,
        start: draggingRowIndex,
        end: droppedOnRowIndex
      };
      this.$store.commit("rearrangeTasks", d);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
