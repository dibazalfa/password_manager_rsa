<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<script>
import "./assets/main.css";
import Layout from "./layouts/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>
