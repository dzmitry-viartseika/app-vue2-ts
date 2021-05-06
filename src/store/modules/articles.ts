import {
  Module, VuexModule, getModule, Mutation, Action,
} from 'vuex-module-decorators';
import store from '@/store/store';
import { Article } from '@/store/models.d';
import { getFeed } from '@/api/api';

type FeedType = 'global' | 'user';

@Module({
  dynamic: true,
  namespaced: true,
  name: 'articles',
  store,
})

class Articles extends VuexModule {
  feed: Article[] = []

  @Mutation
  setFeed(articles: Article[]) { this.feed = articles; }

  @Action({ commit: 'setFeed' })
  async refreshFeed(feedType: FeedType) {
    const globalFeed = await getFeed();
    return globalFeed.articles;
  }
}

export default getModule(Articles);
