<script setup lang="ts">

</script>

<template>
<div class="h-screen w-screen bg-surface-50 dark:bg-surface-900">
        <aside class="h-full w-1/4 flex flex-col">
            <slot name="sidebar"/>
        </aside>
    
    <main class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
      <slot name="content" />
    </main>
</div>
</template>