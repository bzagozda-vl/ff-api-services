import { ConsentController } from './ConsentController';
import { LinkedCustomerAccountController } from './LinkedCustomerAccountController';
import { LinkedCustomerAccountLoginController } from './LinkedCustomerAccountLoginController';
import { UserConsentController } from './UserConsentController';

export * from './SprengnetterGatewayService.Types';

/**
 * The already existing service (SprengnetterService) was used for generating “valuation” reports using one of the products that Sprengnetter has to offer.
 * The Sprengnetter has moved to a platform called Shopware. This new service acts as a gateway to the Shopware platform API.
 */
export class SprengnetterGatewayService {
    public readonly consentController: ConsentController;
    public readonly userConsentController: UserConsentController;
    public readonly linkedCustomerAccountController: LinkedCustomerAccountController;
    public readonly linkedCustomerAccountLoginController: LinkedCustomerAccountLoginController;

    constructor() {
        this.consentController = new ConsentController();
        this.userConsentController = new UserConsentController();
        this.linkedCustomerAccountController = new LinkedCustomerAccountController();
        this.linkedCustomerAccountLoginController = new LinkedCustomerAccountLoginController();
    }
}

export const SprengnetterGatewayServiceInstance = new SprengnetterGatewayService();
