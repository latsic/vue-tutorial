
<template>
  <div class="form-group" >
    <div class="row space-top">
      <div class="col">
        <label for="quote">Quote</label>
        <textarea
          class="form-control" id="quote" cols="30" rows="5"
          :value="textAreaText"
          @keyup="(event) => textAreaChanged(event)">
        </textarea>
      </div>
    </div>
    <div v-if="!quoteLimitReached" class="row space-top">
      <div class="col d-flex justify-content-center">
        <div
          data-toggle="tooltip"
          :title="!canAdd() ? 'Enter new quote to enable button' : ''"
          >
          <button
            type="button" class="btn btn-primary"
            @click="addQuote"
            :disabled="canAdd() ? null : true"
            >
            Add Quote
          </button>
        </div>
      </div>
    </div>
        <app-alert v-else class="space-top"
          :limit="limit"
        >
        </app-alert>
  </div>
</template>

<script>

import Alert from './Alert.vue'

export default {
  props: {
    quoteAdded: {
      type: Function,
      required: true
    },
    quoteLimitReached: {
      type: Boolean,
      required: true
    },
    limit: {
      type: Number,
      required: true
    },
    canAddQuote: {
      type: Function,
      required: true
    }
  },
  data: () =>({
    textAreaText: ''
  }),
  methods: {
    addQuote(event) {
      this.quoteAdded(this.textAreaText);
      this.textAreaText = '';
    },
    textAreaChanged(event) {
      console.log('textAreaText', event.target.value);
      this.textAreaText = event.target.value;
    },
    canAdd() {

        return !this.quoteLimitReached &&
                this.textAreaText &&
                this.canAddQuote(this.textAreaText);
      }
  },
  computed: {
    
  },
  components: {
    appAlert: Alert
  }
}
</script>

<style scoped>
  .space-top {
    margin-top: 1rem;
  }
</style>
