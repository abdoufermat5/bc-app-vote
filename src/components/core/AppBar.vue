<template>
  <v-app-bar
    v-scroll="onScroll"
    :collapse="!collapseOnScroll"
    :collapse-on-scroll="collapseOnScroll"
    :color="!isScrolling ? 'white' : 'grey'"
    fixed
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title
      ><router-link to="/"
        ><span class="home-title">Blck Developers</span></router-link
      ></v-toolbar-title
    >

    <v-slide-x-transition>
      <v-img
        v-if="showLogo"
        :src="require('@/assets/blockchain.png')"
        class="shrink"
        elevation="4"
        contain
        height="50"
      />
    </v-slide-x-transition>

    <v-spacer />

    <social-media/>

    <!-- <base-btn
      class="ml-3"
      large
      href="https://store.vuetifyjs.com/product/freelancer-theme-free?ref=freelancer"
    >
      Download for Free

      <v-icon
        right
        small
      >
        mdi-open-in-new
      </v-icon>
    </base-btn> -->
  </v-app-bar>
</template>

<script>
import SocialMedia from '../SocialMedia.vue';
export default {
  name: "CoreAppBar",

  components: {
    SocialMedia
  },

  data: () => ({
    showLogo: false,
    isScrolling: false,
    collapseOnScroll: true,
  }),

  methods: {
    onScroll() {
      const offset = window.pageYOffset;
      this.isScrolling = offset > 50;
      this.showLogo = offset > 200;
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
}
p {
  font-family: "Courier New", Courier, monospace;
}
.home-title {
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
}
</style>
