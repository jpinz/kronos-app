<template>
  <div class="hello">
    <b-table :data="tasks" draggable>
      <template slot-scope="props">
        <b-table-column field="name" label="Name">
          <a :href="props.row.link">{{ props.row.name }}</a>
        </b-table-column>
        <b-table-column field="description" label="Description">{{ props.row.description }}</b-table-column>
        <b-table-column field="selected" label="Selected" width="40">
          <b-icon
            :icon="props.row.selected ? 'checkbox-marked' : 'close-box'"
            :type="props.row.selected ? 'is-success' : 'is-danger'"
          ></b-icon>
          <!-- <b-checkbox v-model="props.row[1].selected"></b-checkbox> -->
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
export default {
  name: "SelectTasks",
  props: {
    group: String,
  },
  computed: {
    selected() {
      return this.$store.state.taskGroups[this.$props.group].selected;
    },
    tasks() {
      let tasks = [];
      Object.entries(
        this.$store.state.taskGroups[this.$props.group].tasks
      ).forEach((task) => {
        tasks.push({
          name: task[0],
          selected: task[1].selected,
          description: task[1].description,
          link: task[1].link,
        });
      });
      return tasks;
    },
  },
  methods: {},
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
