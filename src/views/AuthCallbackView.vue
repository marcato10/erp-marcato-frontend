<script setup lang="ts">

import { useAuth0, type Auth0VueClient } from '@auth0/auth0-vue';
import { watchEffect } from 'vue';
import {fetchUser, type UserDetailsResponse } from '../services/AuthService';
import router from '@/router/index';
const auth0:Auth0VueClient = useAuth0();


watchEffect(async ()=>{
  if(auth0.isAuthenticated){ 
    console.log('Checking user login')
    const fetchedUser:UserDetailsResponse = await fetchUser(auth0);

    if(fetchedUser.status_code === 204){
      console.log("Redirecionando para completar o cadastro.")
      router.push('/complete-register');
      return;
    }
    if(fetchedUser.status_code === 200){
      console.log("Redirecionando para a home.")
      router.push('/home');
      return;
    }
  }
});


</script>

<template>
  
</template>
