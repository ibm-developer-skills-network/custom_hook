import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Reset states quando a URL mudar
        setLoading(true);
        setError(null);
        setData(null);

        if (!url) {
            setLoading(false);
            return;
        }

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(error.message);
                setLoading(false);
                setData(null);
            });

    }, [url]);

    return [data, loading, error]; // Retorna todos os estados
};

export default UseFetch;