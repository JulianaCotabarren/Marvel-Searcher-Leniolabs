import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import { API_URL, AUTH_QUERIES } from "../constants";

export const ComicDetailContext = createContext();

const ComicDetailProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [comicId, setComicId] = useState(null);
    const [comicDetail, setcomicDetail] = useState(null);

    useEffect(() => {
        const getComicById = async() => {
            const comicDetailResponse = await axios.get(`${API_URL}/comics/${comicId}?${AUTH_QUERIES}`);
            setLoading(false);
            setcomicDetail(comicDetailResponse.data.data.results[0]);
        };
        if (comicId) getComicById();
    }, [comicId]);

  return (
    <ComicDetailContext.Provider value={{ loading, comicId, comicDetail, setComicId, setLoading }}>
        {children}
    </ComicDetailContext.Provider>
  )
}

export default ComicDetailProvider;