import EventService from "../../services/EventService";
export const state = {
  todos: [
    {id: 1, text: '...', done: true},
    {id: 2, text: '...', done: false},
    {id: 3, text: '...', done: true},
    {id: 4, text: '...', done: false}
  ],
  events: [],
  eventsTotal: 0,
  event: {}
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },

  SET_EVENTS(state, events) {
    state.events = events
  },

  SET_EVENT(state, event) {
    state.event = event
  },

  SET_EVENTS_TOTAL(state, totalNumEvents) {
    state.eventsTotal = totalNumEvents
  }
};

export const actions = {
  createEvent({commit}, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  },
  fetchEvents({commit}, {perPage, page}) {
    EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS_TOTAL', response.headers['x-total-count']);
        commit('SET_EVENTS', response.data);
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  },
  fetchEvent({commit, getters}, id) {
    var event = getters.getEventById(id);
    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
};

export const getters = {
  catLength: state => {
    return state.categories.length
  },
  doneToDos: state => {
    return state.todos.filter(todo => todo.done)
  },
  activeTodosCount: (state, getters) => {
    return state.todos.length - getters.doneToDos.length
  },
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
};
