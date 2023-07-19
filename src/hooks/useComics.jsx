import axios from 'axios';
import { useEffect, useState } from 'react';
import { AUTH_QUERIES } from '../constants';

const useComics = () => {
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(20);
  const [collectionUri, setCollectionUri] = useState(null);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const getComics = async () => {
      const comicsResponse = await axios.get(
        `${collectionUri}?${AUTH_QUERIES}&orderBy=-onsaleDate&limit=${limit}`,
      );
      setLoading(false);
      setComics(comicsResponse.data.data.results);
    };
    if (collectionUri) getComics();
  }, [collectionUri]);

  return {
    loading,
    limit,
    collectionUri,
    comics,
    setLoading,
    setLimit,
    setCollectionUri,
    setComics,
  };
};

export default useComics;
