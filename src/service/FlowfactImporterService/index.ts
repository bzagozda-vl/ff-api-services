import { RecordLogController } from './RecordLogController';
import { StatusController } from './StatusController';

export * from './FlowfactImporterService.Types';

class FlowfactImporterService {
    public readonly recordLog: RecordLogController;
    public readonly status: StatusController;

    constructor() {
        this.recordLog = new RecordLogController();
        this.status = new StatusController();
    }
}

export const FlowfactImporterServiceInstance = new FlowfactImporterService();
