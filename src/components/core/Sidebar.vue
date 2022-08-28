<template>
  <div>
    <v-app-bar
      color="teal-darken-4"
      :image="require('@/assets/blockchain.png')"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-toolbar-title
        ><base-text
          ><span class="v-heading font-weight-bold">Galsen</span
          > E-VOTE</base-text
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-divider class="mx-5" vertical></v-divider>
      <v-btn ripple color="rgb(255,255,255)" @click="drawer = !drawer">
        <v-icon title="Menu">mdi-menu</v-icon>
        <base-text>Menu</base-text>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :temporary="false"
      disable-resize-watcher
      :mini-variant="!menuCompact.hidden"
      mini-variant-width="100"
      app
      :src="require('@/assets/back.jpg')"
    >
      <div id="sidebar">
        <div class="sidebar-toggle">
          <div @click="changeToggleState()" id="btn-toggle">
            <v-icon id="btn-toggle-icon" x-large>mdi-chevron-left</v-icon>
          </div>
        </div>
        <div class="sidebar-body">
          <div v-if="getIsAuthenticated" class="sidebar-profile" v-show="memberActive">
            <v-avatar v-if="getUser">
              <v-img :src="require('@/assets/galsen.png')" alt="user profile" />
            </v-avatar>
            <v-skeleton-loader
              v-else
              :elevation="2"
              type="avatar"
            ></v-skeleton-loader>
            <v-slide-x-transition mode="in-out" leave-absolute>
              <div v-show="menuCompact.hidden" id="profile-name">
                <span v-if="getUser">{{ getUser.info.username }}</span>
              </div>
            </v-slide-x-transition>
          </div>
          <div class="sidebar-links">
            <small>Menu</small>
            <hr class="divider" />
            <div class="links">
              <router-link
                v-for="link in menuLinks"
                :key="link.title"
                :to="link.path"
              >
                <div
                  @click="
                    reset();
                    link.isCurrent = true;
                  "
                  class="custom-link"
                  :class="{ clicked: link.isCurrent }"
                >
                  <v-icon :title="link.title" class="icon">
                    mdi-{{ link.icon }}
                  </v-icon>

                  <v-slide-x-transition mode="in-out" leave-absolute>
                    <div class="link-title" v-show="menuCompact.hidden">
                      <base-text> {{ link.title }}</base-text>
                    </div>
                  </v-slide-x-transition>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <template v-slot:append>
        <div class="pa-5 text-center" v-show="menuCompact.hidden">
          <v-btn v-if="getIsAuthenticated" color="red" @click="logout">
            <v-icon left> mdi-logout-variant </v-icon>
            Logout
          </v-btn>
          <v-btn v-else color="blue" to="/login">
            <v-icon left> mdi-logout-variant </v-icon>
            Login
          </v-btn>
        </div>
        <hr />
        <div class="text-center" v-show="menuCompact.hidden">
          <span class="bottom-text">Abdoufermat&POD©</span>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseText from "../base/Text.vue";
export default {
  name: "Sidebar",
  components: { BaseText },
  data: () => {
    return {
      drawer: true,
      menuCompact: {
        hidden: true,
      },
      memberActive: true,
      menuLinks: [
        { path: "/", title: "Home", icon: "home", isCurrent: true },
        {
          path: "/vote",
          title: "Voter",
          icon: "vote",
          isCurrent: false,
        },
        {
          path: "/results",
          title: "Résultat election",
          icon: "menu",
          isCurrent: false,
        },
        {
          path: "/rules",
          title: "Règles du vote",
          icon: "handshake",
          isCurrent: false,
        },
        {
          path: "/about",
          title: "About",
          icon: "information-variant",
          isCurrent: false,
        },
        { path: "/contact", title: "Contact", icon: "email", isCurrent: false },
      ],
    };
  },
  methods: {
    logout: function () {
      this.$store.commit("SET_LOGOUT");
      window.location.href = "/login";
    },
    reset: function () {
      this.menuLinks.map((el) => {
        el.isCurrent = false;
      });
    },
    changeToggleState() {
      let btnToggleIcon = document.getElementById("btn-toggle-icon");
      this.menuCompact.hidden = !this.menuCompact.hidden;
      if (this.menuCompact.hidden) {
        return (btnToggleIcon.style.transform = "rotateY(0deg)");
      } else {
        return (btnToggleIcon.style.transform = "rotateY(180deg)");
      }
    },
  },
  computed: {
    ...mapGetters(["getUser", "getIsAuthenticated"]),
  },
  mounted() {
    this.reset();
  },
};
</script>
<style scoped>
#sidebar {
  margin: 0;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
  user-select: none;
}

.sidebar-body {
  flex-grow: 1;
}

.sidebar-profile {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-block: 15px;
  margin-inline: 14px;
  padding: 4px;
  background-image: linear-gradient(to right, #171b34, #171131, #ffffff);
  border-radius: 10px;
  border: 2px solid rgba(253, 255, 255, 0.993);
  transition: 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-bottom: 25px;
}

.sidebar-profile:hover {
  background-color: rgba(79, 123, 204, 0.85);
  box-shadow: 0px 0px 8px rgba(218, 226, 226, 0.85);
  transform: scale(1.05);
  cursor: pointer;
}

.sidebar-profile #profile-name {
  font-family: "Courier New", Courier, monospace;
  font-weight: 900;
  flex-grow: 1;
  font-size: 16px;
  text-align: center;
  color: #f8f8f8;
}

.sidebar-profile img {
  max-width: 60px;
  border-radius: 100%;
  border: 4px inset rgba(255, 255, 255, 0.25);
}

.sidebar-links {
  padding-inline: 15px;
}

.sidebar-links small {
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
}

.divider {
  opacity: 0.25;
  border-radius: 100%;
  margin-bottom: 25px;
}

.sidebar-links .links {
  display: flex;
  flex-direction: column;
}

.sidebar-links .custom-link {
  text-decoration: none;
  background-color: rgba(210, 216, 223, 0.836);
  border-radius: 5px;
  padding-inline: 10px;
  padding-block: 10px;
  margin-block: 3px;
  font-weight: 900;
  border: 1px solid rgba(255, 255, 255, 0.85);
  transition: 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.sidebar-links .custom-link:hover {
  transform: scale(1.08);
  background-color: #f8f8f8;
  box-shadow: 0px 0px 8px #073991;
  border-color: #0957df;
}

.clicked {
  transform: scale(1.08);
  background-color: #f8f8f8;
  box-shadow: 0px 0px 8px #073991;
  border-color: #073991;
}
/* .sidebar-links a:nth-last-of-type(1):hover {
  background-image: linear-gradient(to right, red, rgb(100, 0, 0));
  box-shadow: 0px 0px 8px red;
  border-color: red;
} */

.sidebar-links .links .custom-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
}

.sidebar-links .link-title {
  margin-left: 10px;
}

.sidebar-links .icon {
  color: rgba(0, 0, 0, 0.9);
  margin-top: -1px;
  margin-left: 3px;
}
.links a {
  text-decoration: none;
}
.sidebar-toggle {
  top: 0px;
  right: 0px;
}

#btn-toggle {
  background-color: rgba(226, 220, 220, 0.849);
  transition: 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

#btn-toggle:hover {
  background-color: rgb(199, 230, 230);
  box-shadow: 0px 0px 6px rgb(73, 85, 51);
}

.app-bar-content {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.app-bar-content h2 {
  color: rgba(255, 255, 255, 0.75);
}

.app-bar-content h2:hover {
  color: rgba(255, 255, 255, 1);
}

.transition-default {
  transition: 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .app-bar-content h2 {
    font-size: 18px;
  }
}
.bottom-text {
  color: #f8f8f8;
}
</style>