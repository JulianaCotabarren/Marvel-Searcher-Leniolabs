import StarWrapper from './styles/StarWrapper';

const Star = ({ fill }) => {
  return <StarWrapper>{fill ? <div>&#9733;</div> : <div>&#9734;</div>}</StarWrapper>;
};

export default Star;