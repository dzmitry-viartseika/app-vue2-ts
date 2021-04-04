import {
  VuexModule, Module, getModule, MutationAction, Mutation,
} from 'vuex-module-decorators';
import store from '@/store/store';
// eslint-disable-next-line import/extensions
import { Profile, User, UserSubmit } from '@/store/module.ts';
import usersApi from '@/api/usersApi/api';

@Module({
  namespaced: false,
  name: 'users',
  store,
})

class UsersModule extends VuexModule {
  user: User | null = null

  profile: Profile | null = null

  @Mutation
  setUser(user: User) { this.user = user; }

  get username() {
    return (this.user && this.user.username) || null;
  }

  @MutationAction({ mutate: ['user'] })
  // eslint-disable-next-line class-methods-use-this
  async login(userSubmit: UserSubmit) {
    const user = await usersApi.loginUser(userSubmit);
    return { user };
  }
}

export default getModule(UsersModule);
