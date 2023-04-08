import React, { useContext, useState } from "react";
import Card from "../Components/Card";
import { GlobalContext } from '../Components/utils/global.context'

const Favs = () => {
  const { theme } = useContext(GlobalContext);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);

  const handleRemoveFav = (id) => {
    const newFavorites = favorites.filter((element) => element.id !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  return (
    <>
      <h1 className={`${theme === "dark" ? "dark" : ""}`}>Dentists Favs</h1>
      <div className={`card-grid ${theme === "dark" ? "dark" : ""}`}>
        {favorites.map((dentist) => (
          <Card key={dentist.id} {...dentist} remove={handleRemoveFav} />
        ))}
      </div>
    </>
  );
};

export default Favs;
