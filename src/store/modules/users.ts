import {
  VuexModule, Module, getModule, MutationAction, Mutation, Action,
} from 'vuex-module-decorators';
import store from '@/store/store';
import {
  newUser, Profile, User, UserSubmit,
} from '@/store/models.d';
import { loginUser, registerUser } from '@/api/api';

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

  @Mutation
  setUser(user: User) { this.user = user; }

  @Action({ commit: 'setUser' })
  async login(userSubmit: UserSubmit) {
    const user = await loginUser(userSubmit);
    console.log('user', user);
    return user;
  }
  // или  MutationAction

  // @MutationAction({ mutate: ['user'] })
  // async login(userSubmit: UserSubmit) {
  //   const user = await loginUser(userSubmit);
  //   console.log('user', user);
  //   return { user };
  // }

  @MutationAction({ mutate: ['user'] })
  async register(userSubmit: newUser) {
    const user = await registerUser(userSubmit);
    console.log('user', user);
    return { user };
  }
}

export default getModule(UsersModule);
