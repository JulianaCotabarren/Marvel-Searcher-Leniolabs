import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import FavoritesPage from "../pages/FavoritesPage";


const Router = () => (
    <main>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/favorites" element={<FavoritesPage/>} />
      </Routes>
    </main>
  );

export default Router;