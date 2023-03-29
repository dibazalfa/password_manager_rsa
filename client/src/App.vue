<template>
  <Header>
    
  </Header>
  <RouterView/>
</template>

<script>
import "./assets/main.css";
// import Layout from "./layouts/Layout.vue";
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";

export default {
  name: "App",
  components: {
    // Layout,
    Header,
    // Footer
  },
};
</script>
