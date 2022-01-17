import { SprengnetterGatewayController } from './SprengnetterGatewayController';

export * from './SprengnetterGatewayService.Types';

/**
 * The already existing service (SprengnetterService) was used for generating “valuation” reports using one of the products that Sprengnetter has to offer.
 * The Sprengnetter has moved to a platform called Shopware. This new service acts as a gateway to the Shopware platform API.
 */
export class SprengnetterGatewayService {
    public readonly sprengnetterGateway: SprengnetterGatewayController;

    constructor() {
        this.sprengnetterGateway = new SprengnetterGatewayController();
    }
}

export const SprengnetterGatewayServiceInstance = new SprengnetterGatewayService();
