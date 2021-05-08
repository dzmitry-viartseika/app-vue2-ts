<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="user.image"
                >
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="user.username"
                >
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="user.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="user.email"
                >
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="updateProfile">
                Update Settings
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { User } from '@/store/models.d';
import users from '@/store/modules/users';

@Component({})
export default class Home extends Vue {
  user: Partial<User> = {};

  created() {
    console.log('wertey');
    this.user = users.user || {};
  }

  async updateProfile() {
    const response = await users.updateSelfProfile({
      email: this.user.email,
      bio: this.user.bio,
    });
    console.log('response', response);
    this.user = users.user || {};
  }
}
</script>

<style scoped>

</style>
