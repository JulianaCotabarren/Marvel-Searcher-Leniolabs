import Circle from './styles/Circle';
import LoaderWrapper from './styles/LoaderWrapper';

const Loader = ({ loading }) => {
  return (
    <LoaderWrapper>
      <Circle loading={loading ? 1 : 0} />
    </LoaderWrapper>
  );
};

export default Loader;
