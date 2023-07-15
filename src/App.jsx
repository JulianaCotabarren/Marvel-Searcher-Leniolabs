import CharactersProvider from "./context/CharactersContext"
import Header from "./layout/Header/Header"
import Main from "./layout/Main/Main"

function App() {

  return (
    <CharactersProvider>
      <Header/>
      <Main/>
    </CharactersProvider>
  )
}

export default App
