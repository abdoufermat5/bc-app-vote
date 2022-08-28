<template>
  <v-main>
    <router-view />
    <section id="pricing" class="pb-8">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="8">
            <h1 class="text-center pt-6 font-weight-light display-2">
              CANDIDATS
            </h1>
            <v-divider class="my-6"></v-divider>
            <v-row class="text-center" v-if="getCandidatesList">
              <v-col
                v-for="candidat in getCandidatesList"
                :key="candidat.id"
                class="col-12 col-sm-6 col-md-4"
              >
                <v-card class="mx-auto" min-height="450">
                  <v-card-text>
                    <div class="flex-center">
                      <div class="circle1">
                        <v-avatar
                          ><v-img
                            :src="require('@/assets/' + candidat.profile)"
                          ></v-img
                        ></v-avatar>
                      </div>
                    </div>
                    <div class="text--disabled text text-h6 my-2">
                      {{ candidat.candidateName }}
                    </div>
                    <div class="my-2">
                      <programme-candidate :name="candidat.candidateName" />
                    </div>
                    <v-divider class="my-2" />

                    <v-divider class="my-5" />

                    <div
                      class="
                        text-uppercase text-h6
                        mt-6
                        blue--text
                        party_name-box
                      "
                    >
                      {{ candidat.partyName }}
                    </div>
                  </v-card-text>
                  <v-card-actions class="validate_btn">
                    <v-btn
                      v-bind="size"
                      rounded
                      outlined
                      :loading="getLoading"
                      color="blue"
                      @click="vote(candidat.partyName)"
                    >
                      Vote
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <v-divider style="margin-right: -23px" vertical></v-divider>

                <v-divider class="mx-4"></v-divider>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col>
                <v-progress-circular
                  :size="70"
                  :width="7"
                  color="secondary"
                  indeterminate
                ></v-progress-circular>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-alert
          v-if="showAlert"
          text
          prominent
          type="error"
          icon="mdi-cloud-alert"
        >
          Vous avez deja voté! Veuillez attendre les resultats!
        </v-alert>
        <v-alert v-if="showSuccess" outlined type="success" text>
          Votre vote a été enregistré! Veuillez attendre les résultats!
        </v-alert>
      </v-container>
      <div class="svg-border-rounded text-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  </v-main>
</template>


<script>
import { mapGetters } from "vuex";
import ProgrammeCandidate from "./ProgrammeCandidate.vue";
export default {
  components: { ProgrammeCandidate },
  data: () => ({
    showAlert: false,
    showSuccess: false,
  }),
  computed: {
    ...mapGetters([
      "getCandidatesList",
      "getIsAuthenticated",
      "getLoading",
      "haveVoted",
      "getUser",
    ]),
    size() {
      const size = { md: "large", xl: "x-large" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    },
  },
  methods: {
    vote: function (data) {
      if (!this.haveVoted(this.getUser.info.cni)) {
        this.$store.commit("SET_IS_LOADING", true);
        setTimeout(() => {
          this.$store.commit("SET_IS_LOADING", false);
          this.$store.commit("SET_VOTE", {
            user: this.getUser.info.cni,
            candidate: data,
          });
          this.showSuccess = true;
        }, 3000);
      } else this.showAlert = true;
    },
  },
};
</script>


<style >
ul {
  font-size: 13px;
  line-height: 1.5em;
  margin: 5px 0 15px;
  padding: 0;
}
ul li {
  list-style: none;
  position: relative;
  padding: 0 0 0 20px;
}
ul li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 5px;
  width: 10px;
  height: 10px;
  background-color: #283e79;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-eeborder-radius: 50%;
}
</style>

<style scoped>
.header {
  background-color: #283e79;
  color: white;
}

.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #e0effc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2.bronze {
  background-color: #cd7f32;
}
.circle2.silver {
  background-color: #c0c0c0;
}
.circle2.gold {
  background-color: #ffd700;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}

#pricing {
  z-index: 0;
}

.content {
  z-index: 1;
}

svg {
  overflow: hidden;
}

section {
  position: relative;
}
.validate_btn {
  justify-content: center;
  padding-top: 10%;
  margin-bottom: 0;
}
.party_name-box {
  min-height: 70px;
}
</style>