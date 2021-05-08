<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        conduit
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            <i class="ion-compose"></i>&nbsp;Home
          </router-link>
        </li>
        <li class="nav-item" v-if="userName">
          <router-link class="nav-link" to="/editor">
            <i class="ion-compose"></i>&nbsp;New Article
          </router-link>
        </li>
        <li class="nav-item" v-if="userName">
          <router-link class="nav-link" to="/settings">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li class="nav-item" v-if="!userName">
          <router-link class="nav-link" to="/register">
            Sign up
          </router-link>
        </li>
        <li class="nav-item" v-if="!userName">
          <router-link class="nav-link" to="/login">
            Sign in
          </router-link>
        </li>
        <li class="nav-item" v-else>
          <router-link class="nav-link" :to="`@${userName}`">
            {{ userName }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import users from '@/store/modules/users';
import { setJWT, getUserInfo } from '@/api/api';

@Component
export default class NavBar extends Vue {
  get userName() {
    return users.user?.username;
  }

  async created() {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      await setJWT(jwtToken);
      await users.getUserInformation();
    } else {
      this.$router.push('/login');
    }
    // const jwtToken = localStorage.getItem('jwtToken');
    // if (jwtToken) {
    //   authApi.getUserInfo().then((resp) => {
    //     const { user } = resp.data;
    //     this.userInfo = user;
    //   }).catch((e) => {
    //     console.error(e);
    //   });
    // } else {
    //   this.$router.push('/login');
    // }
  }
}
</script>

<style scoped>

</style>
