import AdminTableLayout from "layouts/AdminTableLayout";
import useAuthRequest from "hooks/useAuthRequest";
import { useEffect, useMemo, useState } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
    MRT_ColumnFiltersState,
} from 'material-react-table';
import { Tag } from "types/Tags";
import { Pagination } from "types/Pagination";

export default function Index() {

    // Mock the request
    const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 30, //customize the default page size
    });
    const [url, setUrl] = useState<string>('tag');

    useEffect(() => {
        const query = columnFilters
            .filter((filter) => filter.value)
            .map((filter) => `${filter.id}=${filter.value}`)
            .join('&');
                
        setUrl(`tag?${query}&page=${pagination.pageIndex + 1}`);
        
        
    }, [columnFilters, pagination.pageIndex, pagination.pageSize]);

    const { data, error, isLoading } = useAuthRequest<Pagination<Tag>>(url, {
        method: 'get',
    });


    const columns = useMemo<MRT_ColumnDef<Tag>[]>(
        () => [
            {
                accessorKey: 'tagId', 
                header: 'Tag ID',
                size: 150,
                enableColumnFilter: false,
            },
            {
                accessorKey: 'name',
                header: 'Nama',
                size: 200,
            },
        ],
        [],
    );

    const table = useMaterialReactTable<Tag>({
        columns,
        data: data?.data || [],
        manualFiltering: true,
        manualPagination: true,
        pageCount: data?.info?.meta?.totalPage || 0,
        rowCount: data?.info?.meta?.totalItems || 0,
        onPaginationChange: setPagination,
        onColumnFiltersChange: setColumnFilters,
        enableGlobalFilter: false,
        state: {
            isLoading,
            columnFilters,
            pagination,
        },
        initialState: {
            showColumnFilters: true,
            pagination: {
                pageIndex: 0,
                pageSize: 30,
            },
        },
        muiPaginationProps: {
            rowsPerPageOptions: [30],
        },

    });

    return (
        <AdminTableLayout title="Talent">
            <div className="">
                <MaterialReactTable table={table} />
            </div>
        </AdminTableLayout>
    )
}
