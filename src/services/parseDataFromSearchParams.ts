export function parseDataFromSearchParams<T> (searchParams: Record<string, string | string[] | undefined>): T | null  {
    const data = searchParams.data;
    if (typeof data !== 'string') return null;
    try {
        return JSON.parse(data) as T;
    } catch {
        return null;
    }
}