import { UserTokenManagementController } from './UserTokenManagementController';
import { TableDependenciesController } from './TableDependenciesController';
import { ConfigurationController } from './ConfigurationController';

export * from './ImportPreparationService.Types';

export class ImportPreparationService {
    public readonly userTokenManagement: UserTokenManagementController;
    public readonly tableDependencies: TableDependenciesController;
    public readonly configuration: ConfigurationController;

    constructor() {
        this.userTokenManagement = new UserTokenManagementController();
        this.tableDependencies = new TableDependenciesController();
        this.configuration = new ConfigurationController();
    }
}

export const ImportPreparationServiceInstance = new ImportPreparationService();
