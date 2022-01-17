import { APIClient, APIMapping } from '../../http';
import { EmailServiceTypes } from "./EmailService.Types";
import SyncEmailModel = EmailServiceTypes.ManualSyncRequest;

export class SyncController extends APIClient {
    constructor() {
        super(APIMapping.emailService);
    }

    /**
     * Sync a mail manually into the platform
     * @param emailAccount
     * @param subject
     */
    syncEmail(emailAccount: string, subject: string) {
        return this.invokeApiWithErrorHandling('/emails/sync', 'POST', {
            emailAccount: emailAccount,
            subject: subject,
        });
    }

    /**
     * Sync list of emails manually into the platform
     * @param syncEmailModel
     */
    syncEmails(syncEmailModel: SyncEmailModel) {
        return this.invokeApiWithErrorHandling('/emails/sync', 'POST', syncEmailModel);
    }

    /**
     * Connects email with draft. It means that it takes all contacts and estates connected to the draft and
     * connects it to the email.
     * @param entityId email id to connect
     * @param draftId draft id to connect
     */
    async connectEmailWithDraft(entityId: string, draftId: string) {
        return await this.invokeApiWithErrorHandling(`/email/${entityId}/draft/${draftId}`, 'POST');
    }
}
