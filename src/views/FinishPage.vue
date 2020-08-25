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
    role: state => state.role,
    taskGroups: state => state.taskGroups
  }),
  methods: {
    download() {
      console.log(this.taskGroups);
      console.log("downloading...");
      this.axios({
        url: "http://localhost:3001/download", //your url
        method: "POST",
        data: {
          role: this.role,
          taskGroups: this.taskGroups
        },
        responseType: "blob" // important
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "site.zip"); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    }
  }
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
