import React, { useState } from "react";
import dentistImg from "../assets/dentist.jpg";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, remove, isFavoritesPage }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const addFav = () => {
    if (isFavoritesPage) {
      remove(id);
      setIsFavorite(false);
      alert("Dentista eliminado de los favoritos");
    } else {
      const favDentist = {
        name: name,
        username: username,
        id: id,
      };

      const localStorageFavs =
        JSON.parse(localStorage.getItem("favorites")) || [];

      const favoriteDentistIndex = localStorageFavs.findIndex(
        (element) => element.id === favDentist.id
      );

      if (favoriteDentistIndex >= 0) {
        localStorageFavs[favoriteDentistIndex] = favDentist;
        setIsFavorite(true);
        alert("Dentista ya hace parte de los favoritos");
      } else {
        localStorageFavs.push(favDentist);
        setIsFavorite(true);
        alert("Dentista agregado a los favoritos");
      }
      localStorage.setItem("favorites", JSON.stringify(localStorageFavs));
    }
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src={dentistImg} alt="dentist image" className="card-img" />
        <p>{name}</p>
        <p>{username}</p>
        <small>{id}</small>
      </Link>
      <button onClick={addFav}>
        {isFavoritesPage ? "Remove" : isFavorite ? "Remove" : "Add"}
      </button>
    </div>
  );
};

export default Card;