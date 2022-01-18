import {APIClient, APIMapping} from '../../http';
import {StatisticsType} from "../ViewDefinitionService";

export default class IS24StatisticsController extends APIClient {
    constructor() {
        super(APIMapping.is24EstateStatisticsLambdaService);
    }

    /**
     * Fetches IS24 statistics value for given estate
     * @param is24EstateId
     * @param portalId
     * @param type
     */
    async fetchStatistics(is24EstateId: string, portalId: string, type: StatisticsType) {
        return await this.invokeApiWithErrorHandling<number>(this.getPath(type), 'GET', {}, {
            queryParams: {
                portalId,
                scoutId: is24EstateId
            }
        });
    }

    private getPath(type: StatisticsType): string {
        switch (type) {
            case StatisticsType.EXPOSE_VIEWS:
                return '/exposeviews';
            case StatisticsType.CONTACT_REQUESTS:
                return '/contactRequestsAmount';
            default:
                throw new TypeError(`Unhandled statistics type: ${type}`);
        }
    }

}
