import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import CharactersProvider from './context/CharactersContext';
import ComicDetailProvider from './context/ComicDetailContext';
import ComicsProvider from './context/ComicsContext';
import FavoritesProvider from './context/FavoritesContext';
import useTheme from './hooks/useTheme';
import Header from './layout/Header/Header';
import Router from './routes';
import { darkTheme } from './themes';

const App = () => {
  const { currentTheme, isLightTheme, toggleTheme } = useTheme(darkTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <FavoritesProvider>
        <CharactersProvider>
          <ComicsProvider>
            <ComicDetailProvider>
              <BrowserRouter>
                <Header theme={currentTheme} isLight={isLightTheme()} toggleTheme={toggleTheme} />
                <Router />
              </BrowserRouter>
            </ComicDetailProvider>
          </ComicsProvider>
        </CharactersProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
};

export default App;
