import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import VueForceNextTick from "vue-force-next-tick";
Vue.use(VueForceNextTick);
Vue.use(Vuex);

let vuexLocalStorage = null;

if (process.browser) {
  vuexLocalStorage = new VuexPersist({
    key: "vuex", // The key to store the state on in the storage provider.
    storage: window.localStorage // or window.sessionStorage or localForage
  });
}
const store = new Vuex.Store({
  plugins: process.browser ? [vuexLocalStorage.plugin] : [],
  state: {
    isAuthenticated:
      localStorage.getItem("logged") != null
        ? localStorage.getItem("logged") == "true"
        : false,
    loading: false,
    user:
      localStorage.getItem("vuex") != null
        ? localStorage.getItem("vuex").user
        : {
            type: "admin",
            info: {
              id: undefined,
              cni: undefined,
              password: undefined,
              username: "admin"
            },
            voted: false
          },
    vote: {
      user: undefined,
      candidate: undefined
    },
    election: {
      candidates: [],
      init_date: undefined,
      end_date: undefined,
      winner: undefined
    },
    candidate: {
      partyName: undefined,
      candidateName: undefined,
      profile: "",
      numberVote: undefined
    },
    voterList:
      localStorage.getItem("vuex") != null
        ? localStorage.getItem("vuex").voterList
        : undefined,
    candidatesList:
      localStorage.getItem("vuex") != null
        ? localStorage.getItem("vuex").candidatesList
        : undefined,
    resultAvailable: false,
    voteData:
      localStorage.getItem("vuex") != null
        ? localStorage.getItem("vuex").voteData
        : undefined
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getElection(state) {
      return state.election;
    },
    getCandidatesList(state) {
      return state.candidatesList;
    },
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    },
    getLoading(state) {
      return state.loading;
    },
    getCandidate(state) {
      return state.candidate;
    },
    getVote(state) {
      return state.vote;
    },
    resultAvailable(state) {
      return state.resultAvailable;
    },
    haveVoted: state => cni => {
      console.log("CNI VOTE CHECK ---- ", cni);
      if (state.voteData) {
        let res = state.voteData.filter(el => el.user == cni);
        console.log("result check -- ", res);
        return res.length > 0;
      }
      return false;
    },
    getPercentage: state => partyName => {
      console.log("party result: ", partyName);
      let percent =
        state.voteData.filter(el => el.candidate == partyName).length /
        state.voterList.length;
      return percent;
    }
  },
  actions: {},
  mutations: {
    SET_USER(state, data) {
      state.loading = false;
      let userInfo = undefined;
      console.log("VOTERS LIST", state.voterList, "data -- ", data);
      state.voterList.map(el => {
        if (el.cni == data) userInfo = el;
      });
      console.log("User INFO", userInfo);
      if (userInfo) {
        store.commit("SET_IS_AUTHENTICATED", true);
        if (userInfo.username != "admin") {
          state.user = {
            ...state.user,
            type: "voter",
            info: { ...state.user.info, ...userInfo }
          };
        } else {
          state.user = {
            ...state.user,
            type: "admin",
            info: { ...state.user.info, ...userInfo }
          };
        }
      } else {
        store.commit("SET_IS_AUTHENTICATED", false);
      }
    },
    SET_VOTE(state, data) {
      state.vote = { ...state.vote, ...data };
      if (state.voteData) {
        state.voteData = [...state.voteData, state.vote];
      } else {
        state.voteData = [state.vote];
      }
    },
    SET_CANDIDATE(state, data) {
      state.candidate = { ...state.candidate, ...data };
    },
    SET_ELECTION(state, data) {
      state.election = { ...state.election, ...data };
    },
    SET_CANDIDATE_LIST(state, data) {
      console.log("DATA --- ", data);
      state.candidatesList = data;
    },
    SET_VOTER_LIST(state, data) {
      console.log("DATA --- ", data);
      state.voterList = data;
    },
    SET_IS_AUTHENTICATED(state, data) {
      console.log("IS AUTHENTICATED --- ", true);
      localStorage.setItem("logged", data);
      state.isAuthenticated = data;
    },
    SET_IS_LOADING(state, data) {
      console.log("IS LOADING --- ", true);
      state.loading = data;
    },
    SET_RESULT_AVAILAIBLE(state, data) {
      console.log("IS AVAILABLE --- ", true);
      state.resultAvailable = data;
    },
    SET_LOGOUT(state) {
      localStorage.setItem("logged", false);
      (state.user = {
        type: undefined,
        info: {
          id: undefined,
          cni: undefined,
          password: undefined,
          username: undefined
        },
        voted: false
      }),
        (state.isAuthenticated = false);
    }
  }
});

export default store;
