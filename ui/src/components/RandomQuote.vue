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
    <v-card class="mx-auto mb-4" max-width="344" outlined>
      <v-card-title class="overline mb-4">
        {{ quote.author }}
      </v-card-title>
      <v-card-text class="title mb-6">
        {{ quote.content }}
      </v-card-text>
      <v-card-text class="caption">
        {{ quote.explanation }}
      </v-card-text>
    </v-card>
    <transition-group tag="div" name="list" class="grid-container">
      <v-card
        class="mx-auto mb-4"
        v-for="(oldQuote) in oldQuotes"
        :key="oldQuote._id"
        max-width="344"
        outlined
      >
        <v-card-title class="overline mb-4">
          {{ oldQuote.author }}
        </v-card-title>
        <v-card-text class="title mb-6">
          {{ oldQuote.content }}
        </v-card-text>
        <v-card-text class="caption">
          {{ oldQuote.explanation }}
        </v-card-text>
      </v-card>
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
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      quote: {},
      oldQuotes: [],
      loading: false
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
