import IS24StatisticsController from './IS24StatisticsController';

export * from './IS24StatisticsService.Types';

export class IS24StatisticsService {
    public readonly statistics: IS24StatisticsController;

    constructor() {
        this.statistics = new IS24StatisticsController();
    }
}

export const IS24StatisticsServiceInstance = new IS24StatisticsService();
