import AdminTableLayout from "layouts/AdminTableLayout";
import useAuthRequest from "hooks/useAuthRequest";
import { useMemo } from "react";
import { Talent } from "types/Talent";
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import ratingColorizer from "helpers/ratingColorizer";
import { Pagination } from "types/Pagination";

export default function Index() {

    const { data, error, isLoading } = useAuthRequest<Pagination<Talent>>('talent', {
        method: 'get',
    });

    const columns = useMemo<MRT_ColumnDef<Talent>[]>(
        () => [
            {
                accessorKey: 'talentId', //access nested data with dot notation
                header: 'Talent ID',
                size: 150,
            },
            {
                id: 'name',
                header: 'Nama Talent',
                accessorFn: row => row.auth.fullname,
                Cell: ({ renderedCellValue, row }) => (
                    <div className="flex gap-3">
                        <img
                            loading="lazy"
                            className="rounded-full h-20 w-20 object-cover"
                            src={
                                row.original.auth.avatar
                                    ? row.original.auth.avatar
                                    : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                            }
                            alt={`${row.original.auth.fullname} profile photo}`}
                        />
                        <p className="my-auto font-semibold">{renderedCellValue}</p>
                    </div>
                ),
            },
            {
                accessorFn: (row) => (
                    <p className={`text-${row.verified_status === "unverified" ? "red" : "green"}-500`}>
                        {row.verified_status}
                    </p>
                ),
                header: 'Status',
                size: 150,
            },
            {
                accessorFn: (row) => (
                    <p className={`text-${ratingColorizer(parseFloat(row.rating))}`}>
                        {row.rating}
                    </p>
                ),
                header: 'Rating',
                size: 150,
            },
            {
                accessorKey: 'price',
                header: 'Biaya',
                size: 200,
            },
        ],
        [JSON.stringify(data)],
    );

    const table = useMaterialReactTable<Talent>({
        columns,
        data : data?.data ?? [],
        state: {
            isLoading,
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
