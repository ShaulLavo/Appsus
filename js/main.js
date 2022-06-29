'use-strict'
import { router } from './router.js'

const options = {
	template: `
	   <router-view/>
    `,
	components: {}
}

const app = Vue.createApp(options)
app.use(router)
app.mount('#app')
