import { useState, useEffect } from "react";

export const useFetchData = (url) => {
    const [status, setStatus] = useState("idle");
    const [data, setData] = useState([]);

    useEffect(() => {
        setStatus("loading");
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setStatus("data");
                setData(data);
            })
            .catch(() => {
                setStatus("error");
            });
    }, [url]);

    return {
        status,
        data
    };
};
