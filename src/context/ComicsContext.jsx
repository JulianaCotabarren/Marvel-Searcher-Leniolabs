import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import { AUTH_QUERIES } from "../constants";

export const ComicsContext = createContext();

const ComicsProvider = ({children}) => {
    const [collectionUri, setCollectionUri] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comics, setComics] = useState([]);
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        const getComics = async() => {
            const comicsResponse = await axios.get(`${collectionUri}?${AUTH_QUERIES}&orderBy=-onsaleDate&limit=${limit}`);
            setLoading(false);
            setComics(comicsResponse.data.data.results);
        };
        if (collectionUri) getComics();
    }, [collectionUri]);
    
  return (
    <ComicsContext.Provider value={{ loading, comics, setCollectionUri, setLoading, setLimit }}>
        {children}
    </ComicsContext.Provider>
  )
}

export default ComicsProvider;