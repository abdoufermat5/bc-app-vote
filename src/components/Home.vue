
<script>
import CoreView from "../components/core/View.vue";
export default {
  name: "Home",
  components: {
    CoreView,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <v-main>
    <router-view />
    <CoreView />
  </v-main>
</template>


<style>
.head-section {
  background-color: rgb(245, 240, 240);
  opacity: 0.8;
  color: rgb(0, 0, 0);
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  border: 5px solid burlywood;
  border-radius: 15px;
}
</style>