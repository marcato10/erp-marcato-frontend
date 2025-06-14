<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';
import { ref } from 'vue';
import PanelMenu from 'primevue/panelmenu';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import { useAuth0 } from '@auth0/auth0-vue';
import { panelMenuPreset } from '../presets/panelMenu';
import { Menu } from 'primevue';
const user = useAuth0();
const menuItems = ref<MenuItem[]>([
    {
        label: 'Search',
        icon: 'pi pi-search'
    },
    {
        label: 'Team & Settings',
        icon: 'pi pi-cog',
        items: [
            { label: 'Permissions', icon: 'pi pi-lock' }
        ]
    },
    {
        label: 'Funcionarios',
        icon: 'pi pi-users',
        items: [
            { label: 'Todos os funcionários', icon: 'pi pi-id-card' },
            { label: 'Paid Users', icon: 'pi pi-money-bill' },
            { label: 'Flagged Users', icon: 'pi pi-flag' }
        ]
    },
]);


</script>
<template>
<Menu class="h-full md:w-80 flex flex-col" :model="menuItems" :pt="{
    root: '!bg-[#222222] border-b border-surface-200 dark:border-surface-700 bg-[#222222]',
    item: 'bg-[#ff0084]'
}">

    <template #start>
        <div v-if="user" class="p-4 flex items-center gap-3 bg-transparent">
        <Avatar :image="user.picture" shape="circle" size="large" />
        <span class="font-semibold text-surface-800 dark:text-surface-100">{{ user.name }}</span>
    </div>
    </template>
    <template #item="{ item, props }">
        <a v-ripple class="flex items-center" v-bind="props.action">
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
        <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
        <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
        </a>
    </template>

    <div class="mt-auto p-2 border-t border-surface-200 dark:border-surface-700">
        <Button/>
    </div>
</Menu>
</template>