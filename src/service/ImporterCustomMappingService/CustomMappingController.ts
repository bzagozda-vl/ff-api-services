import { APIClient, APIMapping } from '../../http';

export class CustomMappingController extends APIClient {
    constructor() {
        super(APIMapping.flowfactImporterLambda);
    }

    async uploadMapping(mappingId: string, mapping: string) {
        return await this.invokeApiWithErrorHandling<void>('/custom-mapping', 'POST', mapping, {
            queryParams: {
                id: mappingId,
            },
        });
    }

    async getMapping(mappingId: string) {
        return await this.invokeApiWithErrorHandling<string>('/custom-mapping', 'GET', {
            queryParams: {
                id: mappingId,
            },
        });
    }

    async deleteMapping(mappingId: string) {
        return await this.invokeApiWithErrorHandling<void>('/custom-mapping', 'DELETE', {
            queryParams: {
                id: mappingId,
            },
        });
    }
}
