<template>
  <v-app>
    <v-main>
      <v-container>
        <sidebar />
        <router-view />
        <footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/core/AppBar.vue";
import Footer from "./components/core/Footer.vue";
import Sidebar from "./components/core/Sidebar.vue";
export default {
  name: "App",
  components: { AppBar, Footer, Sidebar },

  data: () => ({
    //
  }),
};
</script>
