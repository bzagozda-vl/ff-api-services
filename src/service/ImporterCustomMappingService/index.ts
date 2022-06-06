import { CustomMappingController } from './CustomMappingController';

export class ImporterCustomMappingService {
    constructor(public readonly customMapping: CustomMappingController) {}
}

export const ImmporterCustomMappingInstance = new ImporterCustomMappingService(new CustomMappingController());
