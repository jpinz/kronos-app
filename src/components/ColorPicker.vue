<template>
  <div class="color-picker">
    <chrome-picker :value="color" @input="updateValue"></chrome-picker>

    <p class="title is-4">{{ name }}</p>
  </div>
</template>

<script>
import { Chrome } from "vue-color";

export default {
  name: "ColorPicker",
  components: {
    "chrome-picker": Chrome
  },
  props: {
    name: String
  },
  data() {
    return { color: {} };
  },
  computed: {},
  methods: {
    updateValue(value) {
      this.color = value;
      this.$emit("child-color", this.color);
    }
  }
};
</script>
