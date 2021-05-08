<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link to="/register">
              Create new account?
            </router-link>
          </p>
          <ul class="error-messages" v-if="loginError">
            <li>
              {{ loginError }}
            </li>
          </ul>
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
import users from '@/store/modules/users';

@Component
export default class Login extends Vue {
  email = ''

  password = ''

  loginError = ''

  login() {
    const user = {
      email: this.email,
      password: this.password,
    };
    users.login(user).then((resp) => {
      console.log('1111');
      if (resp) {
        localStorage.setItem('jwtToken', resp.token);
      }
      this.$router.push('/');
    })
      .catch((e) => {
        this.loginError = 'Inavlid Username or Password';
        console.error(e);
      });
  }
}

</script>

<style scoped>

</style>
