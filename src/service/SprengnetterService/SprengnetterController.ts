import { GenericFetchValuationResponse, HTMLError } from '.';
import { APIClient, APIMapping } from '../../http';

export class SprengnetterController extends APIClient {
    constructor() {
        super(APIMapping.spregnetterService);
    }

    /**
     *
     * @param body
     * @returns {GenericFetchValuationResponse}
     */
    async fetchValuation(body: any) {
        return await this.invokeApiWithErrorHandling<GenericFetchValuationResponse>('/api/valuation', 'POST', body);
    }

    /**
     *
     * @param body
     * @returns {GenericFetchValuationResponse}
     */
    async fetchRentValuation(body: any) {
        return await this.invokeApiWithErrorHandling<GenericFetchValuationResponse>('/api/rent', 'POST', body);
    }

    /**
     * Get a Sprengnetter Quick Valuation for an estate
     * @param {String} entityId - The entityId of the estate that should be valuated
     * @param {String} transactionType - type of transaction. Possible values: rent, purchase
     * @returns {GenericFetchValuationResponse} response with details of valuation
     */
    async fetchQuickValuation(entityId: string, transactionType: string) {
        return await this.invokeApiWithErrorHandling<GenericFetchValuationResponse>(`/quickValuation/${transactionType}/${entityId}`, `GET`)
    }

    /**
     * Gets a link to the pdfReport that is stored on S3
     * @param {String} entityId - The entityId of the estate that should the pdfView should be created for.
     * @returns {string} The response contains a link to the pdf that is stored on S3.
     */
    async fetchPdfLink(entityId: String) {
        return await this.invokeApiWithErrorHandling<string | HTMLError>(`/pdfView/${entityId}`, 'GET');
    }

    /**
     * Gets a link to the docxReport that is stored on S3
     * @param {string} entityId - The entityId of the estate that should the docxView should be created for.
     * @returns {string} The response contains a link to the docx that is stored on S3.
     */
    async fetchDocxLink(entityId: string) {
        return await this.invokeApiWithErrorHandling<string | HTMLError>(`/docxView/${entityId}`, 'GET');
    }

    /**
     * Gets the HTML that is necessary to display the market report
     * @param {String} entityId - The entityId of the estate that should the htmlView should be created for.
     * @returns {string} The response contains the html that represents the marketanalysis.
     */
    async fetchHtml(entityId: string) {
        return await this.invokeApiWithErrorHandling<string | HTMLError>(`/htmlView/${entityId}`, 'GET');
    }
}
