import { APIClient, APIMapping } from '../../http';
import { SprengnetterGatewayServiceTypes } from './SprengnetterGatewayService.Types';
import Account = SprengnetterGatewayServiceTypes.Account;

export class SprengnetterGatewayController extends APIClient {
    constructor() {
        super(APIMapping.spregnetterGatewayService);
    }

    /**
     * Creates a new Sprengnetter account for given data
     */
    async createCustomerAccount(account: Account) {
        return await this.invokeApiWithErrorHandling('/accounts', 'POST', account);
    }

    /**
     * Fetches customer account linked with the company of currently logged-in user
     */
    async fetchCustomerAccount() {
        return await this.invokeApiWithErrorHandling<SprengnetterGatewayServiceTypes.CustomerAccount>('/accounts');
    }

    /**
     * Deletes customer account linked with the company of currently logged-in user
     */
    async deleteCustomerAccount() {
        return await this.invokeApiWithErrorHandling('/accounts', 'DELETE');
    }

    /**
     * Fetches all available consents (eg. legal agreements, privacy policy)
     */
    async fetchConsents() {
        return await this.invokeApiWithErrorHandling<SprengnetterGatewayServiceTypes.Consent[]>('/consents');
    }
}
