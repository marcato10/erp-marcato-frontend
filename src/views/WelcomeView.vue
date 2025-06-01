<script setup lang="ts">
import HomeComponent from '../components/Home.vue'
import { RouterLink, RouterView } from 'vue-router'
import Divider from 'primevue/divider';
import Card from 'primevue/card'; 
import Button from 'primevue/button';
import Panel from 'primevue/panel';

import { useAuth0, type Auth0VueClient } from '@auth0/auth0-vue';

const auth0:Auth0VueClient = useAuth0();

async function handleLogin(){
    try{
        auth0.loginWithRedirect();
    }catch(e){
        console.error(e);
    }
}

</script>

<template>
    <div class="two-cards-container">
        <p-card class="left-panel-card">
            <template #title>
                Painel Principal
            </template>
            <template #content>
                <p>Este é o conteúdo do painel da esquerda, ocupando 60% da largura disponível.</p>
                <p>O tema Aura definirá a aparência deste card.</p>
            </template>
        </p-card>

        <p-card class="right-panel-card">
            <template #title>
                Menu Lateral
            </template>
            <template #subtitle>
                Opções
            </template>
            <template #content>
                <p>Painel da direita, com 40%.</p>
                <div class="button-stack">
                    <p-button label="Continue" icon="pi pi-cog"></p-button>
                </div>
            </template>
            <template #footer>
                <p-button @onclick="handleLogin" label="Salvar" icon="pi pi-check" size="small"></p-button>
            </template>
        </p-card>
    </div>
</template>


<style scoped>
.two-cards-container {
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 1rem;
    gap: 1rem;
    box-sizing: border-box;
    background-color: var(--p-surface-ground, #f0f2f5);
}

.left-panel-card {
    flex: 0 0 60%;
    display: flex;
    flex-direction: column;
}

.right-panel-card {
    flex: 0 0 calc(40% - 1rem);
    display: flex;
    flex-direction: column;
}

:deep(.p-card) {
    height: 100%;
}

:deep(.p-card-content) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.button-stack {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
}

</style>