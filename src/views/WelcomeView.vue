<script setup lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';

import { useAuth0, type RedirectLoginOptions, type Auth0VueClient } from '@auth0/auth0-vue';

const auth0: Auth0VueClient = useAuth0();

async function handleLogin(options?: RedirectLoginOptions) {
    try {
        await auth0.loginWithRedirect(options);
    } catch (e) {
        console.error(e);
    }
}
</script>

<template>
    <div class="flex flex-col md:flex-row p-6 gap-6 w-full h-auto md:h-screen box-border">

        <Card
            class="w-full md:w-3/5"
            :pt="{
                root: { class: 'flex flex-col h-full' },
                body: { class: 'flex flex-col flex-grow h-full' },
                content: { class: 'flex-grow p-0' }
            }"
        >
            <template #content>
                <div class="flex flex-col justify-center items-center gap-6 h-full w-full">
                    <h2 class="text-4xl font-semibold text-surface-800 dark:text-surface-100">Bem vindo</h2>
                </div>
            </template>
        </Card>

        <Card
            class="w-full md:w-2/5"
            :pt="{
                root: { class: 'flex flex-col h-full' },
                body: { class: 'flex flex-col flex-grow h-full' },
                content: { class: 'flex-grow p-0' }
            }">
            <template #content>
                <div class="flex flex-col justify-center items-center gap-6 h-full w-full">
                    <h2 class="text-3xl font-semibold text-surface-800 dark:text-surface-100">Início</h2>
                    <Button @click="() => handleLogin()" label="Continuar" size="large"></Button>
                </div>
            </template>
        </Card>
    </div>
</template>
