import { SchemaV2FieldType } from '@flowfact/types';

export interface ShortViewDefinition {
    id: string;
    type: ViewType | null;
    name: string;
    schemaId: string;
    schema: string;
    sorting: number;
}

export interface ViewDefinitionCategoryJsonFieldConfig {
    field: string;
    path: string;
    type: SchemaV2FieldType;
}

export interface ViewDefinitionCategory {
    name: string;
    fields: string[];
    jsonFieldsConfig?: ViewDefinitionCategoryJsonFieldConfig[];
}

export interface ViewDefinition extends ShortViewDefinition {
    componentId: string;
    defaultOrder: string;
    actions: ViewActionType[];
    categories: ViewDefinitionCategory[];
}

export enum ViewType {
    DEFAULT = 'DEFAULT',
    LIST = 'LIST',
    CARD = 'CARD',
    CALENDAR = 'CALENDAR',
    MAP = 'MAP',
    ENTITY_RELATION = 'ENTITY_RELATION',
    QUICK_CREATE = 'QUICK_CREATE'
}

export enum ViewActionTypes {
    ACCESS_RIGHTS = 'ACCESS_RIGHTS',
    CANCEL_GLOBAL_CHANGE = 'CANCEL_GLOBAL_CHANGE',
    CHANGE_INQUIRY_STATE = 'CHANGE_INQUIRY_STATE',
    CHANGE_INQUIRY_STATUS = 'CHANGE_INQUIRY_STATUS',
    COMPLETE_STATUS = 'COMPLETE_STATUS',
    CREATE_ACTIVITY_REPORT = 'CREATE_ACTIVITY_REPORT',
    CREATE_APPOINTMENT = 'CREATE_APPOINTMENT',
    DELETE = 'DELETE',
    DELETE_INQUIRY = 'DELETE_INQUIRY',
    DEVELOPER_PROJECT_PUBLISH = 'DEVELOPER_PROJECT_PUBLISH',
    DOCUMENT_GENERATOR = 'DOCUMENT_GENERATOR',
    DUPLICATE = 'DUPLICATE',
    EXCEL_EXPORT = 'EXCEL_EXPORT',
    EXPORT_GROUP = 'EXPORT_GROUP',
    FIELD_CALCULATION = 'FIELD_CALCULATION',
    GLOBAL_CHANGE = 'GLOBAL_CHANGE',
    MAILCHIMP_EXPORT = 'MAILCHIMP_EXPORT',
    PRINT_ENTITY = 'PRINT_ENTITY',
    PRINT_PLACARD = 'PRINT_PLACARD',
    QUICK_ACTION = 'QUICK_ACTION',
    RESTORE_GLOBAL_CHANGE = 'RESTORE_GLOBAL_CHANGE',
    SEND_ACTIVITY_REPORT = 'SEND_ACTIVITY_REPORT',
    SEND_EMAIL = 'SEND_EMAIL',
    SEND_INTERACTIVE_EXPOSE = 'SEND_INTERACTIVE_EXPOSE',
    SEND_INTERACTIVE_EXPOSE_DRAFT = 'SEND_INTERACTIVE_EXPOSE_DRAFT',
    SEND_INTERACTIVE_EXPOSE_FROM_INQUIRY = 'SEND_INTERACTIVE_EXPOSE_FROM_INQUIRY',
    PRINT_INTERACTIVE_EXPOSE = 'PRINT_INTERACTIVE_EXPOSE',
}

export type ViewActionType = keyof typeof ViewActionTypes;

export interface ViewDefinitionStatistic {
    id: string;
    name: string;
    schema: string;
    categoryAmount: number;
    fieldAmount: number;
    global: boolean;
}

export interface Customisation {
    schemaName: string;
    viewName: string;
    categoryName: string;
    fieldName?: string;
    predecessor?: string;
    action: 'ADD' | 'MOVE' | 'DELETE';
    type: 'CATEGORY' | 'FIELD';
}
