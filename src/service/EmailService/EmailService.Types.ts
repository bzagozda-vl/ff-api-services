export namespace EmailServiceTypes {
    export interface DnsEntry {
        valid: boolean;
        type: 'a' | 'cname';
        host: string;
        data: string;
    }
    export interface DomainConfigurationResponse {
        domain: string;
        valid: boolean;
        dnsEntries: DnsEntry[];
    }
    export interface Email {
        mailFrom: string;
        replyTo?: string;
        recipientList: string[];
        blindCopyList?: string[];
        carbonCopyList?: string[];
        subject: string;
        body: string;
        schemaId?: string;
        entityId?: string;
    }

    export interface ManualSyncRequest {
        emailAccount: string,
        mails: NylasMail[]
    }

    interface NylasMail {
        from: AddressItem[];
        to: AddressItem[];
        cc: AddressItem[];
        body: string,
        subject: string,
        headers: Record<string, string>[];
        unread: boolean,
        date: number,
        files: NylasFile[],
    }

    interface NylasFile {
        filename: string;
        size: number;
        base64EncodedContent: string;
        content_id: string;
        content_type: string;
        content_disposition: string;
    }

    interface AddressItem {
        name?: string;
        email: string;
    }

    export enum EmailTemplate {
        AdviceInteractiveExpose = 'adviceInteractiveExpose',
        AdviceEmail = 'adviceEmail',
        AdviceInquiryProcessing = 'adviceInquiryProcessing',
        AdvicePortalInsertion = 'advicePortalInsertion',
    }

    export enum EmailRecipient {
        ACCOUNT_MANAGER = 'ACCOUNT_MANAGER',
        ADMIN = 'ADMIN',
        USER = 'USER',
        EXTERNAL = 'EXTERNAL',
    }

    export interface ResyncResponse {
        id: number,
        companyId: string;
        accountId?: string;
        finished: boolean;
        success: boolean;
        createdAt: Date;
        updatedAt: Date;
    }
}
