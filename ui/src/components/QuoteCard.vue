<template>
  <v-card class="mx-auto mb-4" max-width="344" outlined>
    <v-card-title class="overline mb-4">
      {{ quote.author }}
    </v-card-title>
    <v-card-text class="title mb-6">
      {{ quote.content }}
    </v-card-text>
    <v-btn class="read-more-btn" text @click="showMore = !showMore" small>
      {{ showMore ? 'Show less' : 'Read more' }}
    </v-btn>
    <v-card-text v-if="showMore" class="caption explanation-text">
      {{ quote.explanation }}
    </v-card-text>
    <v-card-text v-else class="caption explanation-text">
      {{ quote.explanation?.substring(0, 150) + "..." }}
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  props: {
    quote: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showMore: false,
    };
  },
};
</script>

<style scoped>
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
