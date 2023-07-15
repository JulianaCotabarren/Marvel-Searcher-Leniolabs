import CharactersProvider from "./context/CharactersContext"
import Main from "./layout/Main/Main"

function App() {

  return (
    <CharactersProvider>
      <Main/>
    </CharactersProvider>
  )
}

export default App
