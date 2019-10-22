<template>
  <div>
    <h1>Event List</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event">
      {{event}}
    </EventCard>
    <BaseIcon></BaseIcon>
  </div>
</template>

<script>
  import EventCard from '@/components/EventCard.vue'
  import axios from 'axios'

  export default {
    components: {
      EventCard
    },
    data() {
      return {
        events: []
      }
    },
    created() {
      axios.get('http://localhost:8080/db.json')
        .then(response => {
          this.events = response.data.events;
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
</script>
