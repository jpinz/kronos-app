export default {
  components: true,
  mode: "spa",
  target: "static", // default: 'server'
  modules: [
    // Simple usage
    "nuxt-buefy"
  ],
  buildModules: ["@nuxtjs/tailwindcss"]
};
