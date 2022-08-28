<template>
  <v-main>
    <router-view />
    <section>
      <div class="text--disabled text text-h2 my-2">Resultat du vote</div>
    </section>
    <section v-if="resultAvailable" id="pricing" class="pb-8">
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
                    <div class="my-2"></div>
                    <v-card color="grey" shaped elevation="5">
                      <div
                        class="
                          text-uppercase text-h6
                          mt-6
                          info--text
                          party_name-box
                        "
                      >
                        {{ candidat.partyName }}
                      </div>
                    </v-card>
                  </v-card-text>
                  <v-card-actions class="validate_btn">
                    <div
                      class="
                        text-uppercase text-h2
                        mt-6
                        secondary--text
                        party_name-box
                      "
                    >
                      {{
                        Math.round(
                          (getPercentage(candidat.partyName) + Number.EPSILON) *
                            100
                        )
                      }}%
                    </div>
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
    <v-container v-else class="my-5">
      <div v-if="!isAdmin" class="blue--text text-h6 my-2">
        Les résultats ne sont pas encore disponibles
      </div>
      <v-btn
        v-if="isAdmin"
        :loading="getLoading"
        color="secondary"
        @click="publish"
      >
        PUBLIER LES RESULTAT
      </v-btn>
    </v-container>
  </v-main>
</template>

<script>
import { mapGetters } from "vuex";
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12] }],
      },
    };
  },
  computed: {
    ...mapGetters([
      "getCandidatesList",
      "getIsAuthenticated",
      "getLoading",
      "getUser",
      "resultAvailable",
      "getPercentage",
    ]),
    isAdmin: function () {
      return this.getUser.type == "admin";
    },
  },
  methods: {
    publish: function () {
      this.$store.commit("SET_IS_LOADING", true);
      setTimeout(() => {
        this.$store.commit("SET_RESULT_AVAILAIBLE", true);
        this.$store.commit("SET_IS_LOADING", false);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #283e79;
  color: white;
}

.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #00417a;
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
  background-color: #2e1d0c;
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