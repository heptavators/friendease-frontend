
import { BASE_API_URL } from "lib/env";

export function apiRoute(url: string) {
    return `${BASE_API_URL}/api/` + url
    //
}
