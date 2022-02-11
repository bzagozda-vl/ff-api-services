import { ApiResponse, APIClient, APIMapping } from '../../http';
import { CsvDataToEntityImporter } from './CsvDataToEntityImporter.Types';

export class CsvDataToEntityImporterController extends APIClient {
    constructor() {
        super(APIMapping.csvDataToEntityImporterService);
    }

    /**
     * Get import status for given fileId
     * @param fileId id of uploaded csv file
     * @returns status of file import
     */
    async fetchImportStatus(fileId: string): Promise<ApiResponse<CsvDataToEntityImporter.ImportStatus>> {
        return await this.invokeApiWithErrorHandling<CsvDataToEntityImporter.ImportStatus>(`/import/status`, 'GET', undefined, {
            queryParams: {
                fileId: fileId,
            },
        });
    }

    /**
     * Get mapping for fileId
     * @param fileId id of uploaded csv file
     */
    async fetchMapping(fileId: string): Promise<ApiResponse<CsvDataToEntityImporter.ImportMapping>> {
        return await this.invokeApiWithErrorHandling<CsvDataToEntityImporter.ImportMapping>(`/mapping`, 'GET', undefined, {
            queryParams: {
                fileId: fileId,
            },
        });
    }

    /**
     * Upload csv file to be imported into system
     * @param file csv file to be imported
     * @param targetSchema schema where data should be imported
     * @param delimiter delimiter used inside csv file
     * @param onUploadProgress function triggered on upload progress
     */
    async uploadCsvFile(
        file: FormData,
        targetSchema: string,
        delimiter: string = ',',
        // eslint-disable-next-line no-unused-vars
        onUploadProgress?: (progressEvent: ProgressEvent) => void
    ): Promise<ApiResponse> {
        return await this.invokeApiWithErrorHandling(`/upload`, 'POST', file, {
            queryParams: {
                targetSchema: targetSchema,
                delimiter: delimiter,
            },
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: onUploadProgress,
        });
    }

    /**
     *  Start importing file data into system
     * @param fileId id of uploaded csv file
     */
    async startImport(fileId: string): Promise<ApiResponse> {
        return await this.invokeApiWithErrorHandling(`/import`, 'POST', undefined, {
            queryParams: {
                fileId: fileId,
            },
        });
    }

    /**
     * Update field mapping for file
     * @param fileId id of uploaded csv file
     * @param updateMappingData updated mapping data
     */
    async updateFieldMapping(fileId: string, updateMappingData: Record<string, CsvDataToEntityImporter.ImportField>): Promise<ApiResponse> {
        return await this.invokeApiWithErrorHandling(`/mapping/field`, 'PATCH', updateMappingData, {
            queryParams: {
                fileId: fileId,
            },
        });
    }

    /**
     *
     * @param fileId id of uploaded csv file
     * @param fieldName name of mapping field to be removed
     */
    async deleteFieldMapping(fileId: string, fieldName: string): Promise<ApiResponse> {
        return await this.invokeApiWithErrorHandling(`/mapping/field`, 'DELETE', undefined, {
            queryParams: {
                fileId: fileId,
                fieldName: fieldName,
            },
        });
    }
}
