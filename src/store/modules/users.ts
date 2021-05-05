import {
  VuexModule, Module, getModule, MutationAction, Mutation, Action,
} from 'vuex-module-decorators';
import store from '@/store/store';
import { Profile, User, UserSubmit } from '@/store/models.d';
import { loginUser } from '@/api/api';

@Module({
  namespaced: false,
  dynamic: true,
  name: 'users',
  store,
})

class UsersModule extends VuexModule {
  user: User | null = null

  profile: Profile | null = null

  get userName() {
    return this.user || null;
  }

  // @Mutation
  // setUser(user: User) { this.user = user; }
  //
  // @Action({ commit: 'setUser' })
  // async login(userSubmit: UserSubmit) {
  //   const user = await loginUser(userSubmit);
  //   return user;
  // }
  // или  MutationAction

  @MutationAction({ mutate: ['user'] })
  async login(userSubmit: UserSubmit) {
    const user = await loginUser(userSubmit);
    return { user };
  }
}

export default getModule(UsersModule);
