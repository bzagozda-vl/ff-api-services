export class APIService {
    constructor(private readonly serviceName: string) {
        this.serviceName = serviceName;
    }

    get name() {
        return this.serviceName;
    }
}

// deprecated - useable only for Lambdas created with the old scaffold. For new Lambdas just use APIService.
export class LambdaAPIService extends APIService {
    constructor(serviceName: string, private readonly forceUrl: string | undefined = undefined) {
        super(serviceName);
        this.forceUrl = forceUrl;
    }

    get url() {
        return this.forceUrl;
    }
}

export class S3APIService extends APIService {
    constructor(serviceName: string, private readonly forceUrl: string | undefined = undefined) {
        super(serviceName);
        this.forceUrl = forceUrl;
    }

    get url() {
        return this.forceUrl;
    }
}

const APIMapping = {
    // entitlementService: new LambdaAPIService('entitlement-lambda', 'http://localhost:3001/offline'), // for local offline usage
    aclGroupService: new APIService('acl-group-service'),
    adminTokenService: new APIService('admin-token-service'),
    alternativeCompanyDataService: new APIService('alternative-company-data-service'),
    appointmentBookingService: new APIService('appointment-booking-service'),
    behaviourService: new APIService('behaviour-service'),
    caasManamgentService: new APIService('caas-management-service'),
    calendarSyncService: new APIService('calendar-sync-service'),
    clientNotificationService: new APIService('client-notification-service'),
    commissionCalculationService: new APIService('commission-calculation-service'),
    companyService: new APIService('company-service'),
    contactService: new APIService('contact-service'),
    contractService: new APIService('contract-service'),
    csvDataToEntityImporterService: new APIService('csv-data-to-entity-importer-service'),
    csvToEntityImporterService: new APIService('csv-to-entity-importer-service'),
    customerLegitimationArchiveService: new APIService('customer-legitimation-archive-service'),
    documentGeneratorService: new APIService('document-generator-service'),
    documentTemplateService: new APIService('document-template-service'),
    dynamicLayoutService: new APIService('dynamic-layout-service'),
    emailService: new APIService('email-service'),
    entitlementService: new LambdaAPIService('entitlement-lambda'),
    entityFieldCalculationService: new APIService('entity-field-calculation-service'),
    entityService: new APIService('entity-service'),
    entityShareService: new APIService('entity-share-service'),
    everSignService: new APIService('eversign-service'),
    excelExporterService: new APIService('excel-exporter-service'),
    featureToggleService: new APIService('feature-toggle-service'),
    fieldCalculationService: new APIService('entity-field-calculation-service'),
    filterDefinitionService: new APIService('filter-definition-service'),
    flowfactExporterInternalService: new APIService('flowfact-exporter-internal-service'),
    flowfactImporterLambda: new APIService('flowfact-importer-lambda'),
    flywheelService: new APIService('flywheel-service'),
    formService: new APIService('form-service'),
    fullTextSearchService: new APIService('full-text-search-service'),
    funnelService: new APIService('funnel-service'),
    gdprService: new APIService('gdpr-service'),
    geoInformationService: new APIService('geo-information-service'),
    geolocationService: new APIService('geolocation-service'),
    globalChangeService: new APIService('global-change-lambda'),
    historyModuleService: new APIService('history-module-service'),
    importerFlowFactTransferService: new APIService('importer-flowfact-transfer-service'),
    importPreparationLambda: new APIService('import-preparation-lambda'),
    importPreparationService: new APIService('import-preparation-service'),
    inquiryService: new APIService('inquiry-service'),
    interactiveExposeDeliveryService: new APIService('interactive-expose-delivery-service'),
    interactiveExposeService: new APIService('interactive-expose-service'),
    interactiveExposeStatisticsService: new APIService('interactive-expose-statistics-service'),
    interactiveExposeV2LambdaService: new LambdaAPIService('iex2-expose-lambda'),
    interactiveExposeV2S3Service: new S3APIService('iex2-expose'),
    is24EntitlementService: new APIService('is24-entitlement-service'),
    is24EstateStatisticsLambdaService: new APIService('is24-estate-statistics-lambda'),
    is24ImportService: new APIService('is24-import-service'),
    is24LeadService: new APIService('is24-lead-service'),
    is24PublishService: new APIService('is24-publish-service'),
    lambdaProxyService: new APIService('lambda'),
    mailchimpService: new APIService('mailchimp-sync-integration-service'),
    matchmakingService: new APIService('matchmaking-service'),
    multimediaService: new APIService('multimedia-service'),
    nylasContactSyncService: new APIService('nylas-contact-sync-service'),
    nylasService: new APIService('nylas-service'),
    office365AuthenticationService: new APIService('office365-authentication-service'),
    openimmoFtpAccessService: new APIService('openimmo-ftp-access-service'),
    openimmoImporterService: new APIService('openimmo-importer-service'),
    openimmoPublishService: new APIService('openimmo-publish-service'),
    placeholderService: new APIService('placeholder-service'),
    portalManagementService: new APIService('portal-management-service'),
    presetService: new APIService('preset-service'),
    proofOfActivityService: new APIService('proof-of-activity-service'),
    propertyMarketingPhaseService: new APIService('property-marketing-phase-service'),
    releaseNotesService: new APIService('release-notes-service'),
    relogService: new APIService('relog-service'),
    sampleDataService: new APIService('sampledata-service'),
    schemaService: new APIService('schema-service'),
    searchService: new APIService('search-service'),
    slackIntegrationService: new APIService('slack-integration-service'),
    smsIngestionService: new APIService('sms-ingestion-service'),
    smsService: new APIService('sms-service'),
    softLinksEntityService: new APIService('softlinks-entity-service'),
    spregnetterGatewayService: new APIService('sprengnetter-gateway-service'),
    spregnetterService: new APIService('sprengnetter-service'),
    supportService: new APIService('support-service'),
    swissLeadService: new APIService('swiss-lead-service'),
    taggingService: new APIService('tagging-service'),
    tagService: new APIService('tag-service'),
    teamsIntegrationService: new APIService('teams-integration-service'),
    templateService: new APIService('template-service'),
    trialLicenseServive: new APIService('trial-license-service'),
    userLogout: new APIService('user-logout-service'),
    userService: new APIService('user-service'),
    viewDefinitionService: new APIService('view-definition-service'),
    workflowService: new APIService('workflow-service'),
};

export default APIMapping;
