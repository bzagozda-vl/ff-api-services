import { APIClient, APIMapping } from '../../http';

export class LinkedCustomerAccountLoginController extends APIClient {
    constructor() {
        super(APIMapping.spregnetterGatewayService);
    }

    /**
     * Logs in with the credentials of linked customer account. Credentials are read from the current user
     *
     * @return 200 - user is successfully logged in. Response is a url to the Sprengnetter Valuation Apps page.
     * The user will be automatically logged in
     * @return 404 - user is not registered
     */
    async login() {
        return await this.invokeApiWithErrorHandling<string>('/accounts/login', 'POST');
    }
}
