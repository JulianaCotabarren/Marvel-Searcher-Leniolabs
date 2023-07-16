import { useContext } from 'react';
import { CharactersContext } from '../../context/CharactersContext';
import Loader from '../../components/commons/Loader/Loader';
import CardList from '../../components/CardList/CardList';
import MainWrapper from './styles/MainWrapper';
import { ComicDetailContext } from '../../context/ComicDetailContext';
import ComicDetail from '../../components/ComicDetail/ComicDetail';

const Main = () => {
  const { loading: charactersLoading } = useContext(CharactersContext);
  const { loading: comicDetailLoading, comicId } = useContext(ComicDetailContext);

  return (
    <MainWrapper>
      {charactersLoading || comicDetailLoading ? (
        <Loader loading={charactersLoading || comicDetailLoading} />
      ) : comicId ? (
        <ComicDetail />
      ) : (
        <CardList />
      )}
    </MainWrapper>
  );
};

export default Main;
