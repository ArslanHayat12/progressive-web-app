import { useEffect, useState } from 'react'

export const useFetch = (url: string) => {
    const [response, setResponse] = useState({})
    const [error, setError] = useState({})
    const [status, setStatus] = useState('idle')

    useEffect(() => {
        setStatus('loading')
        ;(async () => {
            try {
                const response = await fetch(url)
                const jsonResp = await response.json()
                setResponse(jsonResp)
                setStatus('fetched')
            } catch (err) {
                setError(err)
                setStatus('failed')
            }
        })()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { response, error, status }
}
