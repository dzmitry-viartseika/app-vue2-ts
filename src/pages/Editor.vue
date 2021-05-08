<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                >
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.body"
                >
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.description"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="article.tagList"
                >
                <div class="tag-list"></div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="createNewArticle"
              >
                Publish Article
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
import users from '@/store/modules/users';
import { createArticle, setJWT } from '@/api/api';
import { Article } from '@/store/models.d';

@Component({})
export default class Editor extends Vue {
  article: Article = {
    body: '',
    description: '',
    tagList: null,
    title: '',
  }

  async createNewArticle() {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      await setJWT(jwtToken);
      this.article.tagList = this.article.tagList?.split(' ');
      console.log('this.article', this.article);
      await createArticle(this.article);
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>
