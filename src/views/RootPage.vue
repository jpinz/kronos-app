<template>
  <section>
    <div class="columns">
      <div class="column is-narrow">
        <Sidebar />
      </div>

      <div class="column">
        <b-steps v-model="pageNumber">
          <b-step-item step="1" label="Role Select">
            <RoleSelect />
          </b-step-item>
          <b-step-item step="2" label="Task & Group Select">
            <GroupSelect />
          </b-step-item>
          <b-step-item step="3" label="Done!">
            <FinishPage />
          </b-step-item>
        </b-steps>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import RoleSelect from "@/views/RoleSelect.vue";
import GroupSelect from "@/views/GroupSelect.vue";
import FinishPage from "@/views/FinishPage.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "RootPage",
  components: {
    Sidebar,
    RoleSelect,
    GroupSelect,
    FinishPage,
  },
  computed: {
    pageNumber: {
      get() {
        return this.$store.state.pageNumber;
      },
      set(value) {
        this.$store.commit("setPage", value);
      },
    },
  },
};
</script>
