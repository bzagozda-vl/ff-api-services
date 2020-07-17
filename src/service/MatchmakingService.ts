import {
    Contact,
    MatchCountForEstate,
    MatchmakingPagingResponse,
    MatchScoreContact,
    MatchScoreEstate,
    PagedResponse,
    SearchprofileMatch
} from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient, APIMapping } from '../http';

export class MatchmakingService extends APIClient {

    constructor() {
        super(APIMapping.matchmakingService);
    }

    getAllMatches(page: number = 0): Promise<AxiosResponse<MatchmakingPagingResponse<Array<Contact>>>> {
        console.warn('getAllMatches() is deprecated! Use getAllMatchesForContacts() instead!');
        return this.fetchAllMatchesForContacts(page);
    }

    /**
     * TODO: Please comment this method
     * @param page
     */
    async fetchAllMatchesForContacts(page: number = 0): Promise<AxiosResponse<MatchmakingPagingResponse<Array<Contact>>>> {
        return await this.invokeApi('/matches/contacts', 'GET', undefined, {
            queryParams: { page },
        });
    }

    /**
     * TODO: Please comment this method
     * @param page
     */
    async fetchAllMatchesForEstates(page: number = 0): Promise<AxiosResponse<MatchmakingPagingResponse<Array<Contact>>>> {
        return await this.invokeApi('/matches/estates', 'GET', undefined, {
            queryParams: { page },
        });
    }

    /**
     * TODO: Please comment this method
     * @param contactId
     * @param page
     */
    async fetchMatchesByContact(contactId: string, page: number = 0): Promise<AxiosResponse<MatchmakingPagingResponse<Array<MatchScoreContact>>>> {
        return await this.invokeApi(`/matches/contacts/${contactId}`, 'GET', undefined, {
            queryParams: { page },
        });
    }

    /**
     * TODO: Please comment this method
     * @param estateId
     * @param page
     */
    async fetchMatchesByEstate(estateId: string, page: number = 0): Promise<AxiosResponse<MatchmakingPagingResponse<Array<MatchScoreEstate>>>> {
        return await this.invokeApi(`/matches/estates/${estateId}`, 'GET', undefined, {
            queryParams: { page },
        });
    }

    /**
     * TODO: Please comment this method
     * @param estateId
     */
    async fetchMatchCountByEstate(estateId: string): Promise<AxiosResponse<MatchCountForEstate>> {
        return await this.invokeApi(`/matches/estates/${estateId}/count`, 'GET');
    }

    /**
     * Fetch matches for a given searchprofile
     * @param searchpofileId
     * @param page
     * @param size
     * @param offset
     */
    async fetchMatchesBySearchprofile(searchprofileId: string, page: number = 0, size: number = 10, offset: number = 0) {
        return await this.invokeApiWithErrorHandling<PagedResponse<SearchprofileMatch>>(`/match/search-profile/${searchprofileId}`, 'GET', undefined, {
            queryParams: { page, size, offset },
        });
    }

    /**
     * TODO: Please comment this method
     */
    async initialImport(): Promise<AxiosResponse> {
        return await this.invokeApi('/trigger/initial', 'POST');
    }
}

export default new MatchmakingService();
