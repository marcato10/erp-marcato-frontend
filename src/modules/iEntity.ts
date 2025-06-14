import type { ColumnDefinition } from "@/types/ColumnDefinition";
import type { Ref } from "vue";
import type { RouteRecordRaw } from "vue-router";

export interface ServiceComposable<T> {
  data: Ref<T[]>;
  isLoading: Ref<boolean>;
  fetchData: () => Promise<void>;
}

export interface iEntity{
    columns: ColumnDefinition[],
    routes: RouteRecordRaw[],
    useService: ()=> ServiceComposable<unknown>
}

export class EntityVal{
  key: string;
  entity: iEntity;
  constructor(key: string, entity: iEntity){
    this.key = key;
    this.entity = entity;
  }
}