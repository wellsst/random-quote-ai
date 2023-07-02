<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center mb-5">
        <v-btn outlined @click="fetchQuote">New Quote</v-btn>
      </v-col>
      <v-col cols="4">
        <v-card
          class="mx-auto mb-5"
          max-width="344"
          outlined
        >
          <v-card-text>
            <div>
              <div class="text-overline mb-1">{{ quote.author }}</div>
              <div class="text-h6 mb-1">{{ quote.content }}</div>
              <div class="text-caption">{{ quote.explanation }}</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col v-for="(oldQuote, index) in oldQuotes" :key="index" cols="4">
        <v-card
          class="mx-auto mb-4"
          max-width="344"
          outlined
        >
          <v-card-text>
            <div>
              <div class="text-overline mb-1">{{ oldQuote.author }}</div>
              <div class="text-h6 mb-1">{{ oldQuote.content }}</div>
              <div class="text-caption">{{ oldQuote.explanation }}</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      quote: {},
      oldQuotes: [],
    }
  },
  methods: {
    async fetchQuote() {
      const { data } = await axios.get('http://localhost:3000/quote');
      if (this.quote.content) {
        this.oldQuotes.unshift(this.quote);
      }
      this.quote = data;
    },
  },
  created() {
    this.fetchQuote();
  },
}
</script>
