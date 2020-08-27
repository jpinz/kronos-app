<template>
  <div class="mt-8 max-w-full rounded bg-primary shadow-md">
    <h1 class="text-center text-6xl">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["title"]
};
</script>
