import useSWR from 'swr';
import { BASE_API_URL } from 'lib/env';

export default function useAuthRequest<T>(url: string, options: RequestInit = {}) : { data: T | null, error: any, isLoading: boolean } {

    const token = localStorage.getItem('token')

    if (!token) {
        return {
            data: null,
            error: 'No token provided',
            isLoading: false,
        }
    }

    options = {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            contentType: 'application/json',
        },
    }
    
    const { data, error } = useSWR(`${BASE_API_URL}/api/` + url, async url => {
        const response = await fetch(url, options)
        const data = await response.json()

        return data
    })

    return {
        data,
        error,
        isLoading: !error && !data,
    }
}
