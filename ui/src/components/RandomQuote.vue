<template>
  <div>
    <v-card class="mb-5">
      <v-card-title>{{ quote.author }}</v-card-title>
      <v-card-text>{{ quote.content }}</v-card-text>
      <v-card-actions>
        <v-btn outlined color="primary" @click="fetchQuote">New Quote</v-btn>
      </v-card-actions>
    </v-card>
    <div v-for="(oldQuote, index) in oldQuotes" :key="index">
      <v-card class="mb-2">
        <v-card-title>{{ oldQuote.author }}</v-card-title>
        <v-card-text>{{ oldQuote.content }}</v-card-text>
      </v-card>
    </div>
  </div>
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
