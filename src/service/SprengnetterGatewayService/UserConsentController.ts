import { APIClient, APIMapping } from '../../http';
import { SprengnetterGatewayServiceTypes } from './SprengnetterGatewayService.Types';

export class UserConsentController extends APIClient {
    constructor() {
        super(APIMapping.spregnetterGatewayService);
    }

    /**
     * Fetches all consents for the current user
     */
    async fetchAllUserConsents() {
        return await this.invokeApiWithErrorHandling<SprengnetterGatewayServiceTypes.UserConsent[]>('/user-consents');
    }

    /**
     * Fetches the consent with the given id for the current user
     */
    async fetchUserConsent(id: string) {
        return await this.invokeApiWithErrorHandling<SprengnetterGatewayServiceTypes.UserConsent>(`/user-consents/${id}`);
    }

    /**
     * Updates the consent with the given consentId for the current user and sets the given consent status
     */
    async updateUserConsent(consentStatusUpdate: SprengnetterGatewayServiceTypes.ConsentStatusUpdate) {
        return await this.invokeApiWithErrorHandling<SprengnetterGatewayServiceTypes.UserConsent>('/user-consents', 'POST', consentStatusUpdate);
    }
}
