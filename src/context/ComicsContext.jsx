import { createContext } from "react"
import useComics from "../hooks/useComics";

export const ComicsContext = createContext();

const ComicsProvider = ({children}) => {
  const {
    loading,
    limit,
    collectionUri,
    comics,
    setLoading,
    setLimit,
    setCollectionUri,
    setComics,
  } = useComics();  
    
  return (
    <ComicsContext.Provider 
      value={{ 
        loading,
        limit,
        collectionUri,
        comics,
        setLoading,
        setLimit,
        setCollectionUri,
        setComics,
      }}
    >
      {children}
    </ComicsContext.Provider>
  )
}

export default ComicsProvider;