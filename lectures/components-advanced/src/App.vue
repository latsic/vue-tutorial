<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent='appQuote'">Quote</button>
        <button @click="selectedComponent='appAuthor'">Author</button>
        <button @click="selectedComponent='appNew'">New</button>
        <p>{{ selectedComponent }}</p>
        <!-- <app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p slot="content">A wonderful Quote!</p>
          <p>Default Stuff 1</p>
          <p>Default Stuff 2</p>
          <p slot="subtitle">Some default subtitle</p>
        </app-quote> -->
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote';
import Author from './components/Author';
import New from './components/New';
export default {
  data: () => ({
    quoteTitle: 'The Quote',
    selectedComponent: 'appQuote'
  }),
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
  }
}
</script>

<style scoped>
  h2 {
    color: blue;
  }
  p {
    color: blue;
  }
</style>
