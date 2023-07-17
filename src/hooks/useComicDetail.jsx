import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL, AUTH_QUERIES } from '../constants';

const useComicDetail = () => {
  const [loading, setLoading] = useState(false);
  const [comicId, setComicId] = useState(null);
  const [comicDetail, setcomicDetail] = useState(null);

  useEffect(() => {
    const getComicById = async () => {
      const comicDetailResponse = await axios.get(`${API_URL}/comics/${comicId}?${AUTH_QUERIES}`);
      setLoading(false);
      setcomicDetail(comicDetailResponse.data.data.results[0]);
    };
    if (comicId) getComicById();
  }, [comicId]);

  return {
    loading,
    comicId,
    comicDetail,
    setLoading,
    setComicId,
    setcomicDetail,
  };
};

export default useComicDetail;
