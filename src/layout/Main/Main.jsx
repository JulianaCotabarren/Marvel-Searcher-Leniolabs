import { useContext } from 'react';
import { CharactersContext } from '../../context/CharactersContext';
import { ComicDetailContext } from '../../context/ComicDetailContext';
import Loader from '../../components/commons/Loader/Loader';
import CardList from '../../components/CardList/CardList';
import ComicDetail from '../../components/ComicDetail/ComicDetail';
import MainWrapper from './styles/MainWrapper';

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
