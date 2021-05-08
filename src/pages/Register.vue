<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link to="/login">
              Have an account?
            </router-link>
          </p>
          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="username"
              >
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"
              >
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"
              >
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              @click="register"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { registerUser } from '@/api/api';
import users from '@/store/modules/users';

@Component
export default class Register extends Vue {
  username = ''

  email = ''

  password = ''

  register() {
    try {
      const user = {
        email: this.email,
        password: this.password,
        username: this.username,
      };
      users.register(user);
      const response = registerUser(user);
      this.$router.push('/');
    } catch (e) {
      console.error(e);
    }
  }
}

</script>

<style scoped>

</style>
