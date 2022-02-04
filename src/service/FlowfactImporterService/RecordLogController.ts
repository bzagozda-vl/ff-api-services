import { APIClient, APIMapping } from '../../http';

export class RecordLogController extends APIClient {
    constructor() {
        super(APIMapping.flowfactImporterLambda);
    }

    async fetchLogDirectories() {
        return this.invokeApiWithErrorHandling('/record-log/directory/entries', 'GET');
    }

    async fetchDirectoryContents(table: string) {
        return this.invokeApiWithErrorHandling(`/record-log/directory/content`, 'GET', undefined, {
            queryParams: {
                table,
            },
        });
    }
}
