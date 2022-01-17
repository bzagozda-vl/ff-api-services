import { APIClient, APIMapping } from '../../http';
import { Album, MultimediaAssignment, MultimediaAssignments } from './MultimediaService.Types';

export class AlbumAssignmentController extends APIClient {
    constructor() {
        super(APIMapping.multimediaService);
    }

    /**
     * Fetches all assigned media item of a given album. Use the short parameter if you just want to get ids.
     * @param schemaName
     * @param entityId
     * @param albumName
     * @param short
     */
    async fetchAssignments(schemaName: string, entityId: string, albumName: string, short: boolean = true) {
        return await this.invokeApiWithErrorHandling<MultimediaAssignments>(
            `/assigned/schemas/${schemaName}/entities/${entityId}`,
            'GET',
            undefined,
            {
                queryParams: {
                    albumName: albumName,
                    short: short,
                },
            }
        );
    }

    /**
     * Get all unassigned media items of a given album. Use the short parameter if you just want to get ids.
     * @param entityId
     * @param albumName
     */
    async fetchUnassignedMediaItemIds(entityId: string, albumName: string | undefined = undefined) {
        return await this.invokeApiWithErrorHandling<{ unassignedIds: number[] }>(`/unassigned/entities/${entityId}`, 'GET', undefined, {
            queryParams: {
                albumName: albumName,
                short: true,
            },
        });
    }

    /**
     * Update assignments of the given album.
     * @param schemaName
     * @param entityId
     * @param albumName
     * @param assignments
     */
    async updateAssignments(
        schemaName: string,
        entityId: string,
        albumName: string,
        assignments: { [key: string]: MultimediaAssignment[] },
        short: boolean = true
    ) {
        return await this.invokeApiWithErrorHandling<MultimediaAssignments>(
            `/assigned/schemas/${schemaName}/entities/${entityId}`,
            'PUT',
            {
                assignments: assignments,
            },
            {
                queryParams: {
                    albumName: albumName,
                    short,
                },
            }
        );
    }

    /**
     * Get all albums where a item is assigned too
     * @param schemaName
     * @param entityId
     * @param mediaItemId
     */
    async fetchAssignedAlbums(schemaName: string, entityId: string, mediaItemId: number) {
        return await this.invokeApiWithErrorHandling<{ albums: Album[] }>(
            `/assigned/schemas/${schemaName}/entities/${entityId}/items/${mediaItemId}`,
            'GET'
        );
    }

    /**
     * This function assign items to an album and add these items intelligent to any possible category if no categories are set.
     * @param schemaName
     * @param entityId
     * @param albumName
     * @param mediaItemIds
     * @param categories
     */
    async assignMediaItems(schemaName: string, entityId: string, albumName: string, mediaItemIds: Number[], categories: string[] = []) {
        return await this.invokeApiWithErrorHandling(`/assigned/schemas/${schemaName}/entities/${entityId}/items`, 'PUT', {
            albumName: albumName,
            categories: categories,
            multimediaItemIds: mediaItemIds,
        });
    }
}
