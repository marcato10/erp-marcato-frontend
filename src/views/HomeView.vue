<script setup lang="ts">
import HomeComponent from '../components/Home.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main>
    <HomeComponent>
      <RouterLink to="/login">Fazer Login</RouterLink>
      <RouterLink to="/register">Fazer Registro</RouterLink>
    </HomeComponent>
    
  </main>
</template>
