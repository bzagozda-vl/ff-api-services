import { APIClient, APIMapping } from '../../http';
import { SprengnetterGatewayServiceTypes } from './SprengnetterGatewayService.Types';

export class ConsentController extends APIClient {
    constructor() {
        super(APIMapping.spregnetterGatewayService);
    }

    /**
     * Fetches all globally available consents (e.g. legal agreements, privacy policy)
     */
    async fetchConsents() {
        return await this.invokeApiWithErrorHandling<SprengnetterGatewayServiceTypes.Consent[]>('/consents');
    }
}
