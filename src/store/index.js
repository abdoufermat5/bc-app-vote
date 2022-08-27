import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuthenticated:
      localStorage.getItem("logged") != null
        ? localStorage.getItem("logged") == "true"
        : false,
    loading: false,
    user: {
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
      numberVote: undefined
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getElection(state) {
      return state.election;
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
    }
  },
  actions: {},
  mutations: {
    SET_USER(state, data) {
      state.user = { ...state.user, ...data };
    },
    SET_VOTE(state, data) {
      state.vote = { ...state.vote, ...data };
    },
    SET_CANDIDATE(state, data) {
      state.candidate = { ...state.candidate, ...data };
    },
    SET_ELECTION(state, data) {
      state.election = { ...state.election, ...data };
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
    SET_LOGOUT(state) {
      localStorage.setItem("logged", false);
      state.isAuthenticated = false;
    }
  }
});

export default store;
