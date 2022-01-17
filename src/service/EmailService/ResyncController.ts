import {APIClient, APIMapping} from '../../http';
import {EmailServiceTypes} from './EmailService.Types';

export class ResyncController extends APIClient {

    constructor() {
        super(APIMapping.emailService);
    }

    /**
     * Resync a mail account in a specific time period
     * @param email
     * @param from
     * @param to
     */
    resync = async (email: string, from: number, to: number) => {
        return this.invokeApiWithErrorHandling<EmailServiceTypes.ResyncResponse>('/resync', 'POST', {
            email: email,
            received_after: from,
            received_before: to
        });
    }

    /**
     * Resync a whole company
     * @param from
     * @param to
     */
    resyncCompany = async (from: number, to: number) => {
        return this.invokeApiWithErrorHandling<EmailServiceTypes.ResyncResponse>('/resync/company', 'POST', {
            received_after: from,
            received_before: to
        });
    }

    /**
     * Checks if a resync progress is running
     * @param progressId
     */
    fetchResyncStatus = async (progressId: number) => {
        return this.invokeApiWithErrorHandling<EmailServiceTypes.ResyncResponse>(`/resync/progress/${progressId}`, 'GET');
    }

    /**
     * Checks if a resync progress is running for a specific account
     * @param accountId
     */
    checkResyncRunning = async (accountId: string) => {
        return this.invokeApiWithErrorHandling<EmailServiceTypes.ResyncResponse>(`/resync/progress`, 'GET', undefined, {
            queryParams: {
                accountId: accountId
            }
        });
    }
}
