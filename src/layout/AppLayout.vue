<script setup lang="ts">
import DefaultLayout from './DefaultLayout.vue';
import AppSidebar from '../components/menu/AppSidebar.vue';

</script>
<template>
    <DefaultLayout>
        <template #sidebar>
            <AppSidebar/>
        </template>
        <template #content>
            <router-view />
        </template>
    </DefaultLayout>
</template>