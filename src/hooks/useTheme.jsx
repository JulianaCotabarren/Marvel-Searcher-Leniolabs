import { useState } from 'react';
import { darkTheme, lightTheme } from '../themes';

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const isLightTheme = () => (currentTheme === lightTheme ? true : false);
  const toggleTheme = () => {
    isLightTheme() ? setCurrentTheme(darkTheme) : setCurrentTheme(lightTheme);
  };
  return {
    currentTheme,
    isLightTheme,
    toggleTheme,
  };
};

export default useTheme;
