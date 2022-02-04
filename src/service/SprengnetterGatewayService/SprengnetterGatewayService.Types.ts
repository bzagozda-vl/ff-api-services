import { Captions } from '@flowfact/types';

export namespace SprengnetterGatewayServiceTypes {
    export interface RegistrationData extends Account {
        // Consents of a user that wants to create an account
        // It will be used at the BE to store the accepted/revoked consents
        consents: ConsentStatusUpdate[];
    }

    export interface BillingAddress {
        zipcode: string;
        city: string;
        street: string;
    }

    export interface Account {
        salutation: string;
        firstName: string;
        lastName: string;
        email: string;
        companyName: string;
        billingAddress: BillingAddress;
    }

    export interface CustomerAccount {
        companyId: string;
        email: string;
        id: string;
    }

    export enum Code {
        PRIVACY_POLICY = 'privacy_policy',
        RESPONSIBILITY = 'responsibility',
    }

    // General consent object
    export interface Consent {
        id: string;
        revision: number;
        code: Code;
        required: boolean;
        translations: Captions;
        // urls that are used inside the translations
        urls: string[];
    }

    export interface UserConsent {
        id: string;
        userId: string;
        companyId: string;
        acceptedAt?: Date;
        withdrawnAt?: Date;
        required: boolean;
        code: Code;
        // id of a general consent
        consentId: string;
        revision: number;
    }

    export interface ConsentStatusUpdate {
        consentId: string;
        status: ConsentStatus;
    }

    export enum ConsentStatus {
        ACCEPTED = 'ACCEPTED',
        REVOKED = 'REVOKED',
    }
}
