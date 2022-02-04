export namespace IS24EstateStatisticsTypes {

    export interface ExposeViewsResponse {
        totalExposeViews: number;
    }

    export interface ContactRequestResponse {
        totalContactRequests: number;
        totalUnreadContactRequests: number;
    }

    export type IS24StatisticsResponse =
        | ExposeViewsResponse
        | ContactRequestResponse;

}