import Checkbox from './styles/Checkbox';
import CheckboxLabel from './styles/CheckboxLabel';
import CheckboxWrapper from './styles/CheckboxWrapper';

const Toggle = ({ toggleTheme }) => {
  return (
    <CheckboxWrapper>
      <Checkbox id="checkbox" type="checkbox" onClick={toggleTheme} />
      <CheckboxLabel htmlFor="checkbox" />
    </CheckboxWrapper>
  );
};

export default Toggle;
