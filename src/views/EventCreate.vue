<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapState({
      user: 'user',
      categories: 'categories'
    })
  }
}
</script>

<style scoped></style>
