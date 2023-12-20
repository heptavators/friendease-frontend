import axios from "axios";
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

// Mocck data
const data : Talent[]= [
    {
        "talentId": "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
        "description": "Seorang musisi dengan keahlian sebagai gitaris dan penyanyi. Saya suka mengeksplorasi berbagai genre musik dan sering tampil di acara-acara musik lokal.",
        "verified_status": "verified",
        "rating": "4.5",
        "price": 150000,
        "auth": {
            "authId": "d1f83072-c6d6-4626-9981-5df048799758",
            "fullname": "Fujikawa Chiai",
            "username": "fujikawachiai",
            "avatar": "https://avatars.githubusercontent.com/u/42530587?v=4",
            "phone_number": "089600000000",
            "user_preferences": null,
            "location": {
                "locationId": "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
                "province": "Kalimantan Timur",
                "city": "Balikpapan"
            }
        },
        "tags": [
            {
                "tagId": "5611418a-15d8-4696-89fa-55337f0d07e1",
                "name": "Bermain-musik"
            },
            {
                "tagId": "a1c959b1-8f18-4144-8904-f2cb3558f483",
                "name": "Curhat"
            },
            {
                "tagId": "39dd7cf3-a15f-4de7-a744-6ea9035f8046",
                "name": "Mendengarkan-musik"
            },
            {
                "tagId": "8aff57d8-ec74-4e5f-b741-570115c05a6d",
                "name": "Wibu"
            },
            {
                "tagId": "597add33-257c-4d86-9812-e655f6a52b94",
                "name": "Akting"
            }
        ],
        "highlights": [
            {
                "highlightId": "c176eb59-83e6-4e06-96d0-340189af3908",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "2edf66df-077d-4b81-a9ea-ae6f64169ee6",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "af3f512a-81a9-498a-8566-2e22a02b8d40",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            }
        ]
    },
    {
        "talentId": "c1124cfc-3f62-4f9a-8182-2819d0624da5",
        "description": null,
        "verified_status": "verified",
        "rating": "4.0",
        "price": 150000,
        "auth": {
            "authId": "636ba364-904b-4133-9cb6-dbb1185b8611",
            "fullname": "Aria Ghora Prabono",
            "username": "aria_ghora",
            "avatar": "https://avatars.githubusercontent.com/u/42530587?v=4",
            "phone_number": "089600000000",
            "user_preferences": "Teman yang bisa diajak bertukar pikiran (open-minded), nyambung dengan saya jika berkomunikasi, bisa saling pengertian dan memahami satu sama lain.",
            "location": {
                "locationId": "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
                "province": "Kalimantan Timur",
                "city": "Balikpapan"
            }
        },
        "tags": [],
        "highlights": [
            {
                "highlightId": "e5b5f8aa-134e-47da-b791-ec092047a2e7",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "885c0204-1e5f-4d3d-a0a7-eeaa59f890ee",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "156866ed-9df3-4098-b074-1e1cfcedeaff",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            }
        ]
    },
    {
        "talentId": "6b908512-a145-4e3b-b072-96af84b00d87",
        "description": null,
        "verified_status": "verified",
        "rating": "4.8",
        "price": 150000,
        "auth": {
            "authId": "821b35f9-5ee0-425a-ba7a-59ecbc5ffe6e",
            "fullname": "Raon Lee",
            "username": "raon_lee",
            "avatar": "https://avatars.githubusercontent.com/u/42530587?v=4",
            "phone_number": "089600000000",
            "user_preferences": "Teman yang bisa diajak bertukar pikiran (open-minded), nyambung dengan saya jika berkomunikasi, bisa saling pengertian dan memahami satu sama lain.",
            "location": {
                "locationId": "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
                "province": "Kalimantan Timur",
                "city": "Balikpapan"
            }
        },
        "tags": [],
        "highlights": [
            {
                "highlightId": "c4bdfd76-5812-42f5-9dc4-4e175ac95dd6",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "6b68d571-2e83-4cc1-886e-2c6212c7ed1e",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "c5469092-502d-4bb0-9c94-9747370e8f71",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            }
        ]
    },
    {
        "talentId": "7f2f85fb-b6ed-4707-8763-2cc67c398b30",
        "description": null,
        "verified_status": "unverified",
        "rating": "3.0",
        "price": 75000,
        "auth": {
            "authId": "6a17fc03-6c40-4946-8b7c-ba8ccb470fed",
            "fullname": "Fauzi Maulana Rahmad Yahya",
            "username": "fauzimaulana",
            "avatar": "https://avatars.githubusercontent.com/u/42530587?v=4",
            "phone_number": "089600000000",
            "user_preferences": null,
            "location": {
                "locationId": "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
                "province": "Kalimantan Timur",
                "city": "Balikpapan"
            }
        },
        "tags": [],
        "highlights": [
            {
                "highlightId": "6c40fc9e-1baf-48a7-adbe-c8e5a0baae36",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "58000ff5-a724-42b9-ae99-c3172789feed",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "246e3472-6754-4a90-bc9d-61e460fb143e",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            }
        ]
    },
    {
        "talentId": "4b00656e-374f-4b99-ae45-e079bac5f3ee",
        "description": null,
        "verified_status": "verified",
        "rating": "4.5",
        "price": 75000,
        "auth": {
            "authId": "d720cbef-4f9a-4376-905f-b0dc1a6b3d3d",
            "fullname": "Nurvirta Monarizqa",
            "username": "nmonarizqa",
            "avatar": "https://avatars.githubusercontent.com/u/42530587?v=4",
            "phone_number": "089600000000",
            "user_preferences": "Teman yang bisa diajak bertukar pikiran (open-minded), nyambung dengan saya jika berkomunikasi, bisa saling pengertian dan memahami satu sama lain.",
            "location": {
                "locationId": "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
                "province": "Kalimantan Timur",
                "city": "Balikpapan"
            }
        },
        "tags": [],
        "highlights": [
            {
                "highlightId": "ec0ee2d7-bd90-4074-8da5-0209afacd97f",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "122360f8-1985-4760-96ab-a04cd6b2d590",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "b50601bd-88ca-4a10-88ba-e93a60a55f87",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            }
        ]
    },
    {
        "talentId": "f0b8710a-7edd-4e67-a0fa-b3754bfd8576",
        "description": null,
        "verified_status": "unverified",
        "rating": "2.5",
        "price": 75000,
        "auth": {
            "authId": "2db05355-7785-487c-9112-4309dc9a846c",
            "fullname": "Ayu Donna",
            "username": "ayudonna",
            "avatar": "https://avatars.githubusercontent.com/u/42530587?v=4",
            "phone_number": "089600000000",
            "user_preferences": null,
            "location": {
                "locationId": "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
                "province": "Kalimantan Timur",
                "city": "Balikpapan"
            }
        },
        "tags": [],
        "highlights": [
            {
                "highlightId": "7e64fa3b-8c5e-42ad-a9f3-e91762206798",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "63e6bbbd-e3a2-4bb5-91e3-adbc7f6fb962",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "185049da-5d02-4e31-8e8d-7f75cef0896f",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            }
        ]
    },
    {
        "talentId": "89341cbe-65d3-46bd-b905-32becfbbf0a4",
        "description": null,
        "verified_status": "unverified",
        "rating": "5.0",
        "price": 75000,
        "auth": {
            "authId": "3105781b-bd78-47b7-a36c-0e9e1e15ec73",
            "fullname": "Muhammad Taufik",
            "username": "thisistaufik",
            "avatar": "https://avatars.githubusercontent.com/u/42530587?v=4",
            "phone_number": "089600000000",
            "user_preferences": null,
            "location": {
                "locationId": "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
                "province": "Kalimantan Timur",
                "city": "Balikpapan"
            }
        },
        "tags": [],
        "highlights": [
            {
                "highlightId": "4312ab96-f5a6-4a45-a6f8-124b8208d428",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "5f91686b-ca75-4bb5-abf8-37f76d6b5551",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "747c5ff5-a341-4fff-af5e-57c9ba77843a",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            }
        ]
    },
    {
        "talentId": "ac56a04d-aa98-4591-8e8c-2b188040c114",
        "description": null,
        "verified_status": "unverified",
        "rating": "4.0",
        "price": 75000,
        "auth": {
            "authId": "f6c44ee6-b695-4c00-901f-60efb44b45a1",
            "fullname": "Asmara Tamara Liranda",
            "username": "tamaraliranda",
            "avatar": "https://avatars.githubusercontent.com/u/42530587?v=4",
            "phone_number": "089600000000",
            "user_preferences": null,
            "location": {
                "locationId": "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
                "province": "Kalimantan Timur",
                "city": "Balikpapan"
            }
        },
        "tags": [],
        "highlights": [
            {
                "highlightId": "93cbc37c-24cf-4d68-bf9d-654e63c6c02f",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "e7db307a-17f2-44af-9357-644200822ee5",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            },
            {
                "highlightId": "621f43fe-7bc9-4b1c-bc0d-63dd0263a107",
                "highlightURL": "https://i.pinimg.com/564x/e8/0b/f4/e80bf43ad9490efa8afdfc6b952aa7d5.jpg"
            }
        ]
    }
]

export default function Index() {

    // Mock the request
    const isLoading = false;

    // const { data, error, isLoading } = useAuthRequest('talent-recommendation', {
    //     method: 'get',
    // });

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
        [],
    );

    const table = useMaterialReactTable<Talent>({
        columns,
        data,
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
