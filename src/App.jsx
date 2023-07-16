import CharactersProvider from "./context/CharactersContext"
import ComicDetailProvider from "./context/ComicDetailContext"
import ComicsProvider from "./context/ComicsContext"
import Header from "./layout/Header/Header"
import Main from "./layout/Main/Main"

function App() {

  return (
    <CharactersProvider>
      <ComicsProvider>
        <ComicDetailProvider>
          <Header/>
          <Main/>
        </ComicDetailProvider>  
      </ComicsProvider>      
    </CharactersProvider>
  )
}

export default App
