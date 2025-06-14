import type { ColumnDefinition } from "@/types/ColumnDefinition";
import type { RouteRecordRaw } from "vue-router";
import { EntityVal, type iEntity, type ServiceComposable } from "../iEntity";
import { registryEntity } from "..";
import Dataview from "@/components/Dataview.vue";
import { useDepartmentsService } from "@/services/DepartmentService";

const entityKey:string = 'departments';

export interface DepartmentDTO {
  readonly id: number;
  title: string;
  description?: string;
}

const DepartmentColumnDefinition:ColumnDefinition[] = [
    {
        field: 'id',
        header: 'ID'
    },
    {
        field: 'title',
        header: 'Nome'
    },
    {
        field: 'description',
        header: 'Descrição'
    }
];

const DepartmentRoutes:RouteRecordRaw[] = [
    {
        path: 'departments',
        name: 'Departments',
        component: Dataview,
        meta:{
            entity: entityKey,
            permissions: ['read:departments']
        }
    }
];

export const departmentModule:iEntity = {
    columns: DepartmentColumnDefinition,
    routes: DepartmentRoutes,
    useService: useDepartmentsService
}

export const departEntityVal:EntityVal = new EntityVal(entityKey,departmentModule);