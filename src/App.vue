<template>
  <div id="app">
    <NavBar />
    <router-view/>
    <FooterTemplate />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FooterTemplate from '@/components/Footer/FooterTemplate.vue';
import NavBar from '@/components/NavBar/NavBar.vue';

@Component({
  components: {
    FooterTemplate,
    NavBar,
  },
})
export default class App extends Vue {

}

</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

</style>
