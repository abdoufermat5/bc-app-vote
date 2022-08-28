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
import listCandidats from "@/assets/data.json";
export default {
  name: "App",
  components: { AppBar, Footer, Sidebar },

  data: () => ({
    //
  }),
  mounted() {
    console.log("JSON DATA -- ", listCandidats);
    this.$store.commit("SET_CANDIDATE_LIST", listCandidats.candidates);
    this.$store.commit("SET_VOTER_LIST", listCandidats.voters);
  },
};
</script>
