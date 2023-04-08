import React, { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom';
import dentistImg from "../assets/dentist.jpg"

const Detail = () => {
  const { theme } = useContext(GlobalContext);
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error(`Something went wrong, Error ${response.status}`);
        setUserData(await response.json());
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataFromApi();
  }, [id]);

  return (
    <div className={`details-container ${theme === "dark" ? "dark" : ""}`}>
      <h1>Dentist Details</h1>
      <article className='detail-dentist'>
        <h3>{userData.name}</h3>
        <img src={dentistImg} alt="dentist image" className="card-img" />
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
        <p>Website: {userData.website}</p>
      </article>
    </div>
  );
};

export default Detail