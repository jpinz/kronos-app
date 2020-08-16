<template>
  <section>
    <h1 class="title is-1">Select the Role</h1>

    <div id="roles">
      <b-radio id="role" v-model="role" name="name" native-value="Manager">Manager</b-radio>
      <b-radio id="role" v-model="role" name="name" native-value="HR">HR</b-radio>
      <b-radio id="role" v-model="role" name="name" native-value="Payroll">Payroll</b-radio>
      <b-radio id="role" v-model="role" name="name" native-value="Employee">Employee</b-radio>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "RoleSelect",
  data() {
    return {
      title: "Select the Role",
    };
  },
  computed: {
    role: {
      get() {
        return this.$store.state.role;
      },
      set(value) {
        this.$store.commit("setRole", value);
      },
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
