export namespace SchemaServiceTypes {
    export interface IntegrationFormData {
        customCss?: string;
        customJs?: string;
        customRedirectUrl?: string;
        customSubmitName?: string;
        integrationFields?: Record<string, unknown>[];
    }
    export interface Integration {
        formData: IntegrationFormData;
        id: string;
        label: string;
        schemaId: string;
        crudUris?: Record<string, unknown>;
        dataUris?: Record<string, unknown>;
    }
}
