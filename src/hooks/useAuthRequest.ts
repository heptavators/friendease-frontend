import { apiRoute } from "helpers/ApiRoute";
import useSWR from "swr";

export default function useAuthRequest<T>(
    url: string,
    options: RequestInit = {}
): { data: T | null; error: any; isLoading: boolean } {
    const token = localStorage.getItem("authToken");
    console.log(token)

    if (!token) {
        return {
            data: null,
            error: "No token provided",
            isLoading: false,
        };
    }

    options = {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`,
            contentType: "application/json",
        },
    };

    const { data, error } = useSWR(apiRoute(url), async (url) => {
        try {
            const response = await fetch(url, options);
            // console.log(await response.text(), BASE_API_URL);

            const data = await response.json();

            return data;
        } catch (e) {
            console.log({ url, e });
            throw e;
        }
    });

    return {
        data,
        error,
        isLoading: !error && !data,
    };
}
