import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'
import Aura from '@primevue/themes/aura';
import Divider from 'primevue/divider';
import Card from 'primevue/card'; 
import Button from 'primevue/button';
import Panel from 'primevue/panel';
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue,{
    unstyled: false,
    ripple: true,
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system', 
            cssLayer: {
                name: 'primevue', 
                order: 'primevue, primeicons'
            }
        }
    }
});
app.component('p-card', Card);
app.component('p-button', Button);
app.component('p-panel', Panel);
app.component('p-divider', Divider);

app.use(
  createAuth0({
    domain: "dev-tpjedcct43j1eghk.us.auth0.com",
    clientId: "nD8I1X0Ev216QkafMn78OyS4IyH2T5RU",
    authorizationParams: {
        redirect_uri: window.location.origin + '/callback',
        audience: "https://marcato.erp.com"
    }
  })
);


app.use(router);
app.mount('#app');
