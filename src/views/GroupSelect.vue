<template>
  <section class="container">
    <div class="notification">
      <h1 class="title is-1">Select a task group to create a page for tasks in that group</h1>
      <b-table :data="taskGroups" detailed detail-key="name">
        <template slot-scope="props">
          <b-table-column field="name" label="Group">{{ props.row.name }}</b-table-column>

          <b-table-column field="selected" label="Selected" width="40">
            <!-- <b-icon
              :icon="props.row.selected ? 'checkbox-marked' : 'close-box'"
              :type="props.row.selected ? 'is-success' : 'is-danger'"
            ></b-icon>-->
            <b-checkbox v-model="props.row.selected" @input="updateSelectedGroup(props.row)"></b-checkbox>
          </b-table-column>
        </template>

        <template slot="detail" slot-scope="props">
          <SelectTasks :group="props.row.name" />
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
  </section>
</template>

<script>
import SelectTasks from "@/components/SelectTasks.vue";

export default {
  name: "GroupSelect",
  components: {
    SelectTasks,
  },
  data() {
    return {
      title: "Select the Group",
    };
  },
  computed: {
    taskGroups() {
      let groups = [];
      Object.entries(this.$store.state.taskGroups).forEach((group) => {
        groups.push({
          name: group[0],
          selected: group[1].selected,
          tasks: group[1].tasks,
        });
      });
      return groups;
    },
  },
  methods: {
    updateSelectedGroup(group) {
      this.$store.commit("selectTaskGroup", group);
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
