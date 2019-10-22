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
  import EventService from "../services/EventService";

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
      EventService.getEvents()
        .then(response => {
          this.events = response.data;
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
</script>
