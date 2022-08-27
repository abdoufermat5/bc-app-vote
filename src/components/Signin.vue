<template>
  <v-container>
    <router-view />
    <v-layout wrap>
      <v-flex sm12 md6 offset-md3>
        <v-card elevation="4" light tag="section">
          <v-card-title>
            <v-layout align-center justify-space-between>
              <h3>Plateforme de vote</h3>
              <v-flex>
                <v-img
                  :alt="platformName"
                  class="d-flex ml-auto"
                  contain
                  height="78px"
                  width="150px"
                  position="center right"
                  :src="require('@/assets/galsen.png')"
                ></v-img>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p>Connectez vous avec votre numero CNI</p>
            <v-form>
              <v-text-field
                outline
                label="CNI"
                type="text"
                :rules="[cni.length>12]"
                v-model="cni"
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
            <v-spacer></v-spacer>
            <v-btn
              @click="authenticate"
              color="info"
              :loading="getLoading"
              :large="$vuetify.breakpoint.smAndUp"
            >
              <v-icon left>mdi-lock</v-icon>
              Se connecter
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm12 md6 offset-md3>
        <v-layout align-center justify-space-between>
          <p class="caption my-3">
            <a href="#">Privacy Policy</a>
            |
            <a href="#">Terms of Service</a>
          </p>
          <p class="caption my-3">Powered by <a href="#">gouv.sn</a></p>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SignIn",
  data() {
    return {
      platformName: "Galsen Vote",
      cni: "",
    };
  },
  computed: { ...mapGetters(["getLoading"]) },
  methods: {
    authenticate: function () {
      this.$store.commit("SET_IS_LOADING", true);
      setTimeout(() => {
        this.$store.commit("SET_IS_AUTHENTICATED", true);
        window.location.href = "/";
        this.$store.commit("SET_IS_LOADING", false);
      }, 3000);
    },
  },
};
</script>

<style>
</style>