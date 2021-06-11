<template>
  <div class="user-aside">
    <div class="logo-wrap">
      <router-link to="dashboard">
        <img :src="logoImg" alt="logo" class="logo" />
      </router-link>
    </div>
    <div class="navbar-wrap">
      <ul class="navbar-nav">
        <li
          class="nav-item"
          :class="{ select: getUserSideMenu === 'dashboard' }"
        >
          <router-link to="dashboard">
            <font-awesome-icon icon="chart-line" class="dashboard" />
            <span>Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item" :class="{ select: getUserSideMenu === 'profile' }">
          <router-link to="profile">
            <font-awesome-icon icon="user-alt" class="profile" />
            <span>Profile</span>
          </router-link>
        </li>
        <li class="nav-item" :class="{ select: getUserSideMenu === 'comment' }">
          <router-link to="comment">
            <font-awesome-icon icon="comment-dots" class="comment" />
            <span>Comments</span>
            <b-badge
              v-if="commentCount"
              class="comment-count"
              variant="primary"
              >{{ commentCount }}</b-badge
            >
          </router-link>
        </li>
        <li
          class="nav-item"
          :class="{ select: getUserSideMenu === 'invitation' }"
        >
          <router-link to="/invitation/modify">
            <font-awesome-icon icon="envelope" class="invitation" />
            <span>Invitation</span>
          </router-link>
        </li>
        <li class="nav-item" @click="onLogout">
          <font-awesome-icon icon="sign-out-alt" class="logout" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div class="aside-footer">
      <span>Version {{ getAppVersion }}</span>
    </div>
  </div>
</template>
<script>
import logoImg from "@/assets/images/only_logo.png";
import { mapMutations, mapGetters } from "vuex";
import { getLastSplitData } from "@/utils/util";
export default {
  name: "UserAside",
  data: () => ({
    logoImg,
    commentCount: 14,
  }),
  computed: {
    ...mapGetters(["getUserSideMenu", "getAppVersion"]),
  },
  watch: {
    $route: "changeMenu",
  },
  methods: {
    ...mapMutations(["setUserSideMenu"]),
    changeMenu() {
      const menu = getLastSplitData(this.$route.fullPath);
      this.setUserSideMenu(menu);
    },
    onLogout() {
      this.$confirm("로그아웃하시겠습니까?").then(flag => {
        if (flag) console.log(flag);
      });
    },
  },
  created() {
    this.changeMenu();
    console.log("[debug] process:", process);
  },
};
</script>
