import { Entity, SchemaV2 } from '@flowfact/types';

export namespace GDPRServiceTypes {
    export type ExportFileType = 'JSON' | 'CSV' | 'XML';
    export type DataChangeRequestApprovalStatus = 'APPROVED' | 'DENIED' | 'PENDING';
    export type UserConsentStatus = 'DEFAULT' | 'BLOCKED' | 'CONSENT_PENDING' | 'CONSENT_GRANTED';
    export type ConsentSource = 'CONTACT' | 'MANUAL' | 'IMPLICIT';

    export interface DataChangeRequestStatus {
        dataChangeRequestApprovalStatus: DataChangeRequestApprovalStatus;
        requestDateTime?: string | number;
        type: DataChangeRequestType;
    }

    export interface RetentionObligation {
        type: 'OWNER' | 'BUYER' | 'RENTER';
        linkedEntityId?: string;
        linkedSchema?: string;
    }

    export interface DataChangeRequest {
        id: string;
        contactId: string;
        companyId: string;
        requestDateTime: string | number;
        processingDateTime: string | number;
        note: string;
        type: DataChangeRequestType;
        approvalStatus: DataChangeRequestApprovalStatus;
        retentionObligations: RetentionObligation[];
        changes: Omit<Entity, 'id' | '_acls' | '_metadata' | '_acps' | '_refs'>;
    }

    export interface ExportRequestBody {
        contactId: string;
        exportType: ExportFileType;
        recipientEmail: string;
    }

    export interface Consents {
        entities: Entity[];
        schema: SchemaV2;
    }

    export interface CompanyTerms {
        privacyUrl: string;
        imprintUrl: string;
        termsOfServiceUrl?: string;
        purposeOfDataProcessing: string;
    }

    export interface ConsentData {
        id: string;
        userId: string;
        companyId: string;
        contact: Entity;
        schema: SchemaV2;
    }

    export interface ConsentByContact {
        [key: string]: boolean;
    }
    export interface CompanySettings {
        companyId: string;
        contactApproachAlwaysAllowed: boolean;
    }

    export interface ConsentStatus {
        contact: string;
        isBlocked: boolean;
        status: UserConsentStatus;
        consentSource: ConsentSource;
        author: string;
    }

    export enum ConsentPurpose {
        GENERAL_CONTACT_CONSENT = 'GENERAL_CONTACT_CONSENT',
        ESTATE_CONTACT_CONSENT = 'ESTATE_CONTACT_CONSENT',
        NEWSLETTER = 'NEWSLETTER',
    }

    export enum DataChangeRequestType {
        DELETE = 'DELETE',
        CHANGE = 'CHANGE',
        PROCESS_LIMITATION = 'PROCESS_LIMITATION',
    }

    export interface ConsentRequestBody {
        contactIds: string[];
        gdprConsentRequest: ConsentRequest;
    }

    export interface ConsentRequest {
        gdprConsentPurpose: ConsentPurpose;
        estateIds?: string[];
    }
}
