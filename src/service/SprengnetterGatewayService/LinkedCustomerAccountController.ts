import { APIClient, APIMapping } from '../../http';
import { SprengnetterGatewayServiceTypes } from './SprengnetterGatewayService.Types';

export class LinkedCustomerAccountController extends APIClient {
    constructor() {
        super(APIMapping.spregnetterGatewayService);
    }

    /**
     * Fetches customer account linked with the company of currently logged-in user
     */
    async fetchCustomerAccount() {
        return await this.invokeApiWithErrorHandling<SprengnetterGatewayServiceTypes.CustomerAccount>('/accounts');
    }

    /**
     * Creates a new Sprengnetter account for given data
     */
    async createCustomerAccount(registrationData: SprengnetterGatewayServiceTypes.RegistrationData) {
        return await this.invokeApiWithErrorHandling('/accounts', 'POST', registrationData);
    }

    /**
     * Deletes customer account linked with the company of currently logged-in user
     */
    async deleteCustomerAccount() {
        return await this.invokeApiWithErrorHandling('/accounts', 'DELETE');
    }
}
