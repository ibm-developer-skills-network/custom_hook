import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState();
    useEffect(()=> {
        if (!url) return; //prevent fetch if url is empty

        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => {
                console.error("Error fetching data:", error);
                setData(null);
            });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]); //add a url dependency to refetch when url changes
    return [data]
};

export default UseFetch
