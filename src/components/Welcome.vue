<template>
  <section id="welcome" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img :src="require('@/assets/galsen.png')" height="100vh" />
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
            <base-heading>Le vote</base-heading>
            <base-text>
              Un vote est la manifestation d'une opinion, d'une volonté ou d'un
              choix lors d'une consultation au sein d'un corps politique, d'un
              collège électoral, d'une assemblée délibérante, etc., en vue d'une
              élection, d'un référendum ou d'une prise décision.<br />

              <blockquote class="blockquote text-right">
                <small>
                  <b>"Un bulletin de vote est plus fort qu'une balle de fusil."</b>
                </small>
                <br />
                <footer class="blockquote-footer">
                  <small
                    >Sir Abraham Lincoln - 1809-1865
                    <cite title="Source Title">discours, 1856</cite></small
                  >
                </footer>
              </blockquote>
            </base-text>
            <router-link to="/signup">
              <base-btn class="mt-4"> Sign Up</base-btn>
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
