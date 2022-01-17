import { Captions } from '@flowfact/types';

export namespace SprengnetterGatewayServiceTypes {
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

    export interface Consent {
        id: string;
        revision: number;
        code: Code;
        required: boolean;
        translations: Captions;
        // urls that are used inside the translations
        urls: string[];
    }
}
