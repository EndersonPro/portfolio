import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import VueScrollactive from 'vue-scrollactive';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub,faGitlab, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faGitlab, faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueScrollactive);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
