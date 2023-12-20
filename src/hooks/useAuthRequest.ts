import useSWR from 'swr';
import { BASE_API_URL } from 'lib/env';

export default function useAuthRequest(url: string, options: RequestInit = {}) {

    const token = localStorage.getItem('token')

    if (!token) {
        // return {
        //     data: null,
        //     error: 'No token provided',
        //     isLoading: false,
        // }

        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSWQiOiJhMDRlNWM0MS0zYmNlLTRkNmEtYmQwNC1jNTFhMmQwOWZiYzciLCJmdWxsbmFtZSI6IkZhcmhhbiBSaXZhbGR5IiwidXNlcm5hbWUiOiJmYXJoYW5yaXZhbGR5IiwiZW1haWwiOiJmYXJpdi5mYXJpdjEyQGdtYWlsLmNvbSIsInJvbGVzIjoiY3VzdG9tZXIiLCJpc3MiOiJGcmllbmRFYXNlIiwiaWF0IjoxNzAzMTA2MjExLCJleHAiOjE3MDMxOTI2MTF9.PwTGonIztxHfLq_rkbSaijw2WBrFC2Ulcap0CFIA7lE')
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
        console.log('response', response)
        const data = await response.json()

        return data
    })

    return {
        data,
        error,
        isLoading: !error && !data,
    }
}
