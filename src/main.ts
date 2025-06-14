import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import "@/assets/main.css";
import App from './App.vue'
import router from './router'
import Aura from '@primeuix/themes/aura';


import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue,{
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.dark',
            name: 'primevue',
            order: 'primevue, tailwind-base, tailwind-utilities'
    }
}
}
);

app.use(
  createAuth0({
    domain: "dev-tpjedcct43j1eghk.us.auth0.com",
    clientId: "nD8I1X0Ev216QkafMn78OyS4IyH2T5RU",
    authorizationParams: {
        redirect_uri: window.location.origin + '/callback',
        audience: "https://marcato.erp.com",
        useRefreshTokens: true
    }
  })
);
console.log("Auth0 initialized");
app.use(router);
app.mount('#app');
