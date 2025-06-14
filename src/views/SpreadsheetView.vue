<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   
import Row from 'primevue/row';
import { ref, type PropType, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const read_only_mode:Ref<boolean> = ref(true);

  export interface ColumnDefinition{
      field: string,
      header: string
  }

const route = useRoute();
defineProps({
    data:{
        type: Array,
        required: true
    },
    columns: {
        type: Array as PropType<ColumnDefinition[]>,
        required: true,
  },
});

</script>

<template>
  <div>
    <DataTable :value="data" paginator :rows="5" :rows-per-page-options="[5,10,15,20]">
        <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
    </DataTable>
  </div>
</template>