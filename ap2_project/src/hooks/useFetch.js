import { useEffect, useState } from "react";

function useFetch(value) {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState (false)
    const [tempo, setTempo] = useState (false)
    useEffect(() => {

        setData({})
        setError(false)
        setTempo(false)

        async function buscaCep() {
            setLoading(true)
            try {
                const response = await fetch(`https://viacep.com.br/ws/${value}/json/`)
                const json = await response.json()
                setTimeout(() =>{
                    setData(json)
                    setLoading (false)
                    setTempo(true)
                }, 3000)
            } catch {
                setError (true)
                setLoading (false)
            }
            }

        if(value != null){
            buscaCep();
        }
    }, [value]);

    return [data, error, loading, tempo]
}

export default useFetch;