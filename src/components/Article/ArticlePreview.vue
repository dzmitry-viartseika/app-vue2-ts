<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
      <div class="info">
        <a href="" class="author">
          {{ item.author.username }}
        </a>
        <span class="date">
           {{ item.createdAt }}
        </span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i>  {{ item.favoritesCount }}
      </button>
    </div>
    <a href="" class="preview-link">
      <h1> {{ item.title }}</h1>
      <p>{{ item.description }}</p>
      <span>Read more...</span>
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Article } from '@/store/models.d';

@Component
export default class ArticlePreview extends Vue {
  @Prop({ type: Object })
  item?: Article
}
</script>

<style scoped>

</style>
