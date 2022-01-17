import { APIClient, APIMapping } from '../../http';

export class ImporterRecordLogController extends APIClient {
    constructor() {
        super(APIMapping.flowfactImporterLambda);
    }

    async fetchLogDirectories() {
        return this.invokeApiWithErrorHandling('/ff-importer-v2-record-log-s3-directory-entries', 'GET');
        // return this.invokeApiWithErrorHandling('/record-log/directory/entries', 'GET');
    }

    async fetchDirectoryContents(table: string) {
        return this.invokeApiWithErrorHandling('/ff-importer-v2-record-log-s3-directory-content', 'POST', { table });
        // return this.invokeApiWithErrorHandling(`/record-log/directory/content`, 'GET', undefined, {
        //     queryParams: {
        //         table,
        //     },
        // });
    }
}
