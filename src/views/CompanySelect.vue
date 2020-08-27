<template>
  <section>
    <h1 class="title is-1">Create the site for the company</h1>

    <b-field label="Company Name">
      <b-input v-model="name"></b-input>
    </b-field>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child box" :style="{ 'background-color': bgc }">
          <ColorPicker name="Primary Color" @child-color="colorPrimaryChange" />
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box" :style="{ 'background-color': bgcs }">
          <ColorPicker name="Secondary Color" @child-color="colorSecondaryChange" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ColorPicker from "@/components/ColorPicker.vue";

export default {
  name: "CompanySelect",
  components: {
    ColorPicker
  },
  data() {
    return {
      title: "Select the Company data"
    };
  },
  computed: {
    name: {
      get() {
        return this.$store.state.company;
      },
      set(value) {
        this.$store.commit("setCompany", value);
      }
    },
    colorPrimary: {
      get() {
        return this.$store.state.colorPrimary;
      },
      set(value) {
        this.$store.commit("setColorPrimary", value);
      }
    },
    colorSecondary: {
      get() {
        return this.$store.state.colorSecondary;
      },
      set(value) {
        this.$store.commit("setColorSecondary", value);
      }
    },
    bgc() {
      return this.colorPrimary.hex;
    },
    bgcs() {
      return this.colorSecondary.hex;
    }
  },
  methods: {
    colorPrimaryChange: function(params) {
      this.colorPrimary = params;
    },
    colorSecondaryChange: function(params) {
      this.colorSecondary = params;
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
