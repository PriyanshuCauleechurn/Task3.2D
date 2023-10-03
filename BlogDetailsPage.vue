<template>
  <div>
    <h1>{{ blogData.title }}</h1>
    <p>{{ blogData.content }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    // Access the route parameter passed from the Blog Page
    blogData() {
      return this.$route.params.blogData;
    },
  },
};
</script>
