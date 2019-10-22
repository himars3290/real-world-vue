import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import 'nprogress/nprogress.css'

const requireComponent = require.context(
  './components', // search directory
  false, // search subdirectory
  /Base[A-Z]\w+\.(vue|js)$/ // regular expression to search
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  );

  Vue.component(componentName, componentConfig.default || componentConfig)
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
