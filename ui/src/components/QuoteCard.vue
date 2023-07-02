<template>
  <v-card class="mx-auto mb-4" max-width="344" outlined>
    <v-card-title class="overline mb-4">
      {{ quote.author }}
    </v-card-title>
    <v-card-text class="title mb-6">
      {{ quote.content }}
    </v-card-text>
    <v-card-subtitle class="my-4">
      <v-chip-group>
        <v-chip v-for="(tag, index) in quote.tags" :key="index" small outlined color="grey darken-2">
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-card-subtitle>
    <v-btn class="read-more-btn" text @click="showMore = !showMore" small>
      {{ showMore ? 'Show less' : 'Read more' }}
    </v-btn>
    <v-card-text v-if="showMore" class="caption explanation-text">
      {{ quote.explanation }}
    </v-card-text>
    <v-card-text v-else class="caption explanation-text">
      {{ quote.explanation?.substring(0, 100) + "..." }}
    </v-card-text>
  </v-card>
</template>

<style scoped>
.explanation-text {
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.read-more-btn {
  font-size: 0.6rem;
  padding: 0.2rem 0.4rem;
  margin-left: 1rem;
}
</style>

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
