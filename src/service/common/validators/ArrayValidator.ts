import {ApiErrorResponse} from '../../../http';

export default class ArrayValidator {
    private readonly minSize: number;
    private readonly maxSize: number;


    constructor(minSize: number = 1, maxSize: number ) {
        this.minSize = minSize;
        this.maxSize = maxSize;
    }

    validateArray(array: any[]) {
        if (array.length < this.minSize || array.length > this.maxSize) {
            return {
                isSuccessful2xx: false,
                data: undefined,
                status: 422
            } as ApiErrorResponse<any>;
        }
        return undefined;
    }
}