export interface Pagination<T> {
    info: {
        success: boolean,
        message: string,
        meta: {
            currentPage: number,
            totalPage: number,
            totalItems: number,
            itemsPerPage: number
        }
    },
    data: T[]
}
