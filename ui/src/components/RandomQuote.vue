<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center mb-5">
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="primary"
        />
        <v-btn outlined @click="fetchQuote" :disabled="loading">New Quote</v-btn>
      </v-col>
    </v-row>

    <quote-card :quote="quote" />

    <transition-group tag="div" name="list" class="grid-container">
      <quote-card v-for="(oldQuote) in oldQuotes" :key="oldQuote._id" :quote="oldQuote" />
    </transition-group>
  </v-container>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(344px, 1fr));
  gap: 20px;
  justify-content: center;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.explanation-text {
  line-height: 1.5;
  white-space: pre-line; /* this preserves line breaks and spaces */
}

.read-more-btn {
  font-weight: 600;
  color: #1976d2;
  margin-top: 10px;
}
</style>

<script>
import axios from "axios";
import QuoteCard from './QuoteCard.vue';

export default {
  components: {
    QuoteCard,
  },
  data() {
    return {
      quote: {},
      oldQuotes: [],
      loading: false,
      showMore: false,
    };
  },
  methods: {
    async fetchQuote() {
      this.loading = true;
      const { data } = await axios.get("http://localhost:3000/quote");
      this.loading = false;
      if (this.quote.content) {
        this.oldQuotes.unshift(this.quote);
      }
      this.quote = data;
    }
  },
  created() {
    this.fetchQuote();
  }
};
</script>
