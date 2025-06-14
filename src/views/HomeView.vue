<script setup lang="ts">
// 1. Importa o SEU layout e os componentes que irão DENTRO dele
import { ref } from 'vue';
import PanelMenu from 'primevue/panelmenu';               
import Button from 'primevue/button';                      
import { useAuth0 } from '@auth0/auth0-vue';               // Para os dados do usuário
import Avatar from 'primevue/avatar';                      
import AppLayout from '@/layout/DefaultLayout.vue';

const { user, logout } = useAuth0();


</script>

<template>
  <div>
    
  </div>
</template>