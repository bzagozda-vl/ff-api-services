import { Flowdsl } from '@flowfact/node-flowdsl';
import { Entity } from '@flowfact/types';

export interface GlobalChangeResponse {
    statusCode: number;
    body: string;
}

export interface FieldValues<T> {
    values: T[];
}

export enum TransformationTypes {
    SET = 'set',
    ADD = 'add',
    DELETE = 'delete',
    DELETE_SPECIFIC_VALUE = 'deleteSpecificValue',
}

export interface TransformationAction {
    type: TransformationTypes;
    field: string;
    values?: any[];
}

export interface Transformations {
    actions: TransformationAction[];
    maxItems?: {
        [fieldName: string]: number;
    };
}

export type Statuses = 'scheduled' | 'canceled' | 'started' | 'finished';

export type GlobalChangeEntity = {
    searchDefinition: FieldValues<Flowdsl>;
    transformations: FieldValues<Transformations>;
    startDate: FieldValues<number>;
    creationDate: FieldValues<number>;
    createdBy: FieldValues<string>;
    status: FieldValues<Statuses>;
    caption: FieldValues<string>;
    numAffectedEntities: FieldValues<number>;
    affectedEntitiesSchema: FieldValues<string>;
    finishDate?: FieldValues<number>;
} & Entity;

export interface CreateGlobalChangeRequestBody {
    searchDefinition: FieldValues<Flowdsl>;
    transformations: FieldValues<Transformations>;
    affectedEntitiesSchema: FieldValues<string>;
    [key: string]: FieldValues<any>;
}
