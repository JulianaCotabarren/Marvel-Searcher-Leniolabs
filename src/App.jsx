import CharactersProvider from "./context/CharactersContext"
import ComicDetailProvider from "./context/ComicDetailContext"
import Header from "./layout/Header/Header"
import Main from "./layout/Main/Main"

function App() {

  return (
    <CharactersProvider>
      <ComicDetailProvider>
        <Header/>
        <Main/>
      </ComicDetailProvider>
      
    </CharactersProvider>
  )
}

export default App
