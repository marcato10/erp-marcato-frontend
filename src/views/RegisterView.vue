<script setup lang="ts">
import { ref } from 'vue';

import Card from 'primevue/card';
import InputText from 'primevue/inputtext'; 
import Button from 'primevue/button';
import { createUser, type UserRegistrationDTO, type RegistrationResponse } from '../services/AuthService';
import { useAuth0, type Auth0VueClient } from '@auth0/auth0-vue';
const auth0:Auth0VueClient = useAuth0();

async function handleSubmit(){
  const userDto: UserRegistrationDTO = {
    userName: userName.value,
    fullName: fullName.value
  };

  console.log('Tentando fazer chamada')
  const response: RegistrationResponse = await createUser(auth0, userDto);

  if (response.statusCode=201) {
    console.log("Resposta do Backend:", response.message);
    alert(`Sucesso (Código ${response.statusCode}): ${response.message}`);
  } else {
    console.error("Erro do Backend:", response.message);
    alert(`Falha (Código ${response.statusCode}): ${response.message}`);
  }

}


const userName = ref('');
const fullName = ref('');
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
    <Card class="w-full md:w-3/5">
      <template #title>
        Complete seu Registro
      </template>
      <template #content>
        <div class="flex flex-col gap-6 p-2">
          <div class="flex flex-col gap-2">
            <label for="fullName" class="font-semibold text-surface-700 dark:text-surface-200">Nome Completo</label>
            <InputText id="fullName" v-model="fullName" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="userName" class="font-semibold text-surface-700 dark:text-surface-200">Nome de Usuário</label>
            <InputText id="userName" v-model="userName"/>
          </div>
          
            <Button class="self-center" label="Finalizar Cadastro" @click="()=>handleSubmit()" size="medium"></Button>
        </div>
      </template>
    </Card>
  </div>
</template>