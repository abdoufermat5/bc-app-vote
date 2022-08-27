<template>
  <section id="welcome" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img :src="require('@/assets/stellar3.jpg')" height="100vh" />
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <base-bubble-1 style="transform: rotate(180deg) translateY(25%)" />

        <v-row align="center" justify="center">
          <v-col cols="10" md="6">
            <base-heading>Blck Developers!</base-heading>
            <base-text>
              Lorem ipsum dolor sit amet, consectetur ad ipiscin elit. Etiam
              vulputate augue vel felis gra vida porta. Lorem ipsum dolor sit
              amet, cons ectetur adipiscing elit.<br />
              Lorem ipsum dolor sit amet, consectetur ad ipiscin elit. Etiam
              vulputate augue vel felis gra vida porta. Lorem ipsum dolor sit
              amet, cons ectetur adipiscing elit.
            </base-text>
            <router-link to="/account">
              <base-btn class="mt-4"> Issue an Asset </base-btn>
            </router-link>
          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {};
  },
};
</script>

<style>
</style>