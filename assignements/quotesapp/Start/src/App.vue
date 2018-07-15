<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <app-quotes-added
                    :count="quotes.length"
                    :max="maxQuotes"
                    >
                </app-quotes-added>
            </div>
        </div>
        <div class="row">
            <div v-if="true || quotes.length < maxQuotes" class="col">
                <app-quote-input
                    :quoteAdded="(quote) => addQuote(quote)"
                    :limit="maxQuotes"
                    :quoteLimitReached="quotes.length >= maxQuotes"
                    :canAddQuote="(quote) => !quoteExists(quote)"
                    >
                </app-quote-input>
            </div>
            <div v-else class="col">
                <app-alert
                    style="margin-top:1rem"
                    :limit="maxQuotes"
                    >
                </app-alert>
            </div>
        </div>
        <div class="row justify-content-center d-flex">
            <div
                v-for="quote of quotes"
                class="col col-sm-12 col-md-6 col-lg-4 col-xl-2 v-spacing "
                :key="quote.id"
                >
                <app-quote    
                    :text="quote.text"
                    :clicked="() => deleteQuote(quote.id)"
                    >
                </app-quote>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <app-info-box
                    :infoText="'Click on a quote to delete it'"
                >
                </app-info-box>
            </div>
        </div>
        <hr>
        <hr>
        <app-quote-grid
            :quotes="quotes"
            :deleteQuote="deleteQuote"
            >
        </app-quote-grid>

    </div>
</template>

<script>
    import QuotesAdded from './components/QuotesAdded.vue';
    import QuoteInput from './components/QuoteInput.vue';
    import Quote from './components/Quote.vue';
    import Alert from './components/Alert.vue';
    import InfoBox from './components/InfoBox.vue';
    import QuoteGrid from './components/QuoteGrid.vue';

    export default {
        data: () => ({
            quotes: [],
            maxQuotes: 4
        }),
        components: {
            appQuotesAdded: QuotesAdded,
            appQuoteInput: QuoteInput,
            appQuote: Quote,
            appAlert: Alert,
            appInfoBox: InfoBox,
            appQuoteGrid: QuoteGrid
        },
        methods: {
            addQuote(quote) {
                
                if(!quote || this.quoteExists(this)) {
                    return;
                }
                
                if(this.quotes.length < this.maxQuotes) {
                    this.quotes.push({
                        text: quote,
                        id: Math.random()
                    });
                }
                else {
                    alert("Please delete an existing quote first!")
                }
            },
            deleteQuote(id) {
                this.quotes = this.quotes.filter(item => item.id != id);
            },
            quoteExists(quote) {
                return this.quotes.find(item => item.text === quote);
            }
        },
        computed: {
            
        }
    }
</script>

<style scoped>
    .v-spacing {
        margin-bottom: 0.5rem;
    }
</style>
