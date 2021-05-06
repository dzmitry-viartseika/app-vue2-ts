import {
  Module, VuexModule, getModule, Mutation, Action,
} from 'vuex-module-decorators';
import store from '@/store/store';
import { Article } from '@/store/models.d';
import { getGlobalFeed } from '@/api/api';

@Module({
  dynamic: true,
  namespaced: true,
  name: 'articles',
  store,
})

class Articles extends VuexModule {
  globalFeed: Article[] = []

  userFeed: Article[] = []

  @Mutation
  setGlobalFeed(articles: Article[]) { this.globalFeed = articles; }

  @Action({ commit: 'setGlobalFeed' })
  async refreshGlobalFeed() {
    const globalFeed = await getGlobalFeed();
    return globalFeed.articles;
  }
}

export default getModule(Articles);
