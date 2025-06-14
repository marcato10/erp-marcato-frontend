import type { ServiceComposable } from "@/modules/iEntity";
import type { ColumnDefinition } from "@/views/SpreadsheetView.vue";
import { useAuth0, type Auth0VueClient } from "@auth0/auth0-vue";
import type { MenuItem } from "primevue/menuitem";
import { ref, type Ref } from "vue";

const BASE_URL:string = 'http://localhost:8088/api';

export interface DepartmentDTO {
  readonly id: number;
  title: string;
  description?: string;
}

export interface DepartmentRegistrationDTO{
    title: string,
    description: string
}

export function useDepartmentsService(): ServiceComposable<DepartmentDTO> {
  
  const { getAccessTokenSilently } = useAuth0();

  const data: Ref<DepartmentDTO[]> = ref([]);
  const isLoading = ref(false);

  const fetchData = async (): Promise<void> => {
    isLoading.value = true;
    
    try {
      const accessToken = await getAccessTokenSilently();
      
      const response = await fetch(`${BASE_URL}/departments`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }
      data.value = await response.json();
    } catch (e) {
      console.error('Falha ao buscar departamentos:', e);
      data.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  return {
    data,
    isLoading,
    fetchData
  };
}
