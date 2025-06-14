import { ref } from 'vue';
import type { MenuItem } from 'primevue/menuitem';


export interface Employee {
  id?: number;
  fullName: string;
  tipoIdentificador: 'CPF' | 'CNPJ';
  identificador: string;
}

const employeeMenuItems = ref<MenuItem[]>([
    {
        label: 'Todos os Funcionários',
        icon: 'pi pi-users',
    },
    {
        label: 'Novo Funcionário',
        icon: 'pi pi-user-plus',
    },
    {
        label: 'Buscar por Documento',
        icon: 'pi pi-search',
    },
    {
        label: 'Relatórios de Funcionários',
        icon: 'pi pi-chart-bar',
    },
    {
        label: 'Importar/Exportar',
        icon: 'pi pi-upload',
    }
]);