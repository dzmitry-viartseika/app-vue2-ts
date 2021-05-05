<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link to="/register">
              Have an account?
            </router-link>
          </p>
<!--          <ul class="error-messages">-->
<!--            <li>That email is already taken</li>-->
<!--          </ul>-->
          <form>
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
              @click="login()"
            >
              Sign in
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { loginUser } from '@/api/api';
import { UserResponse } from '@/store/models.d';
import users from '@/store/modules/users';

@Component
export default class Login extends Vue {
  email = ''

  password = ''

  login() {
    try {
      const user = {
        email: this.email,
        password: this.password,
      };
      users.login(user);
      const response = loginUser(user);
      console.log('response', response);
      // return (response.data as UserResponse).user;
    } catch (e) {
      console.error(e);
    }
  }
}

</script>

<style scoped>

</style>
