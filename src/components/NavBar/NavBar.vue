<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <a class="nav-link active" href="">Home</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/editor">
            <i class="ion-compose"></i>&nbsp;New Article
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/settings">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li class="nav-item" v-if="!userName">
          <router-link class="nav-link" to="/register">
            Sign up
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

@Component
export default class NavBar extends Vue {
  get userName() {
    return users.user?.username;
  }

  created() {
    console.log('userName', this.userName);
  }
}
</script>

<style scoped>

</style>
