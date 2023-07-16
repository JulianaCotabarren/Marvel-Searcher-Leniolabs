import { BrowserRouter } from "react-router-dom"
import CharactersProvider from "./context/CharactersContext"
import ComicDetailProvider from "./context/ComicDetailContext"
import ComicsProvider from "./context/ComicsContext"
import FavoritesProvider from "./context/FavoritesContext"
import Header from "./layout/Header/Header"
import Router from "./routes"

const App = () => {

  return (
    <FavoritesProvider>
      <CharactersProvider>
        <ComicsProvider>
          <ComicDetailProvider>
            <BrowserRouter>
              <Header/>
              <Router/>
            </BrowserRouter>           
          </ComicDetailProvider>  
        </ComicsProvider>      
      </CharactersProvider>  
    </FavoritesProvider>
  )
}

export default App
