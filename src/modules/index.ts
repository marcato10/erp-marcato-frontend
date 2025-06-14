import type { RouteRecordRaw } from "vue-router";
import { departEntityVal, departmentModule } from "./entities/Department";
import type { iEntity } from "./iEntity";

export const registryEntity:Map<string,iEntity> = new Map<string,iEntity>();
registryEntity.set(departEntityVal.key,departEntityVal.entity);

export const registryRoutes:RouteRecordRaw[] = Array.from(registryEntity.values()).flatMap(entity => entity.routes);