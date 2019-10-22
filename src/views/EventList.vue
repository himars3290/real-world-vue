<template>
  <div>
    <h1>Event List</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event">
      {{ event }}
    </EventCard>
    <BaseIcon></BaseIcon>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents')
  },
  computed: mapState(['events'])
}
</script>
