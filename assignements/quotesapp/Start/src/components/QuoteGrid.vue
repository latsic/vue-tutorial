<template>
  <div
    class="row justify-content-center d-flex"
    style="margin-top:1rem"
    > 
    <app-quote
        v-for="quote of quotes"
        :clicked="() => deleteQuote(quote.id)"
        :key="quote.id"
        >
        {{ quote.text }}
    </app-quote>
  </div>  
</template>


<script>
import Quote from './Quote2.vue';
export default {
  components: {
    appQuote: Quote
  },
  props: {
    quotes: {
      type: Array,
      required: true
    },
    deleteQuote: {
      type: Function,
      required: true
    }
  }
}
</script>

