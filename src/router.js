import Vue from 'vue'
import Router from 'vue-router'
import EventList from './views/EventList'
import EventCreate from './views/EventCreate'
import EventShow from './views/EventShow'
import NProgress from 'nprogress'
import store from './store/store'

Vue.use(Router);

const router = new Router({
  mode: 'history',

  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
      props: true
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store.dispatch('event/fetchEvent', routeTo.params.id).then((event) => {
          routeTo.params.event = event;
          next()
        })
      }
    }
  ]
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next()
});

router.afterEach(() => {
  NProgress.done()
});

export default router
