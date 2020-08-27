<template>
  <section>
    <div>
      <h1 class="title is-1">Finished!</h1>

      <b-button type="is-primary" @click="download">Download</b-button>
      <p>This might take a few minutes to complete. Please be patient.</p>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FinishPage",
  data() {
    return { isLoading: false };
  },
  computed: mapState({
    role: state => state.role,
    taskGroups: state => state.taskGroups,
    company: state => state.company,
    colorPrimary: state => state.colorPrimary.hex,
    colorSecondary: state => state.colorSecondary.hex
  }),
  methods: {
    download() {
      console.log(this.taskGroups);
      console.log("downloading...");
      const loadingComponent = this.$buefy.loading.open();
      this.axios({
        url: "http://localhost:3001/download", //your url
        method: "POST",
        data: {
          role: this.role,
          taskGroups: this.taskGroups,
          company: this.company,
          colorPrimary: this.colorPrimary,
          colorSecondary: this.colorSecondary
        },
        responseType: "blob" // important
      })
        .then(response => {
          loadingComponent.close();
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "site.zip"); //or any other extension
          document.body.appendChild(link);
          link.click();
        })
        .catch(error => {
          console.log(error);
          loadingComponent.close();
          this.$buefy.toast.open({
            duration: 3000,
            message: `<b>Error</b> downloading site.`,
            position: "is-bottom",
            type: "is-danger"
          });
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
