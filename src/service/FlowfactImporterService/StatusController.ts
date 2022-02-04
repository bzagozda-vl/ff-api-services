import { APIClient, APIMapping } from '../../http';
import { FlowfactImporterServiceTypes } from '.';

import ImporterStatus = FlowfactImporterServiceTypes.ImporterStatus;

export class StatusController extends APIClient {
    constructor() {
        super(APIMapping.flowfactImporterLambda);
    }

    /**
     * Gets the status of the currently running import.
     */
    async getImportStatus() {
        return await this.invokeApiWithErrorHandling<ImporterStatus>('/status', 'GET');
    }
}
