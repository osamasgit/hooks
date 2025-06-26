import { useState, useEffect } from 'react'

function useFetchCharacters(url) {
    const [characters, setCharacters] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fetchCharacters = async () => {
        try {
            setLoading(true)
            const response = await fetch(url)
            if (!response.ok) {
            throw new Error('No hay resultados')
            }
            const data = await response.json()
            setCharacters(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
        };
    
        fetchCharacters()
    }, [url])
    
    return { characters, loading, error }
}

export default useFetchCharacters