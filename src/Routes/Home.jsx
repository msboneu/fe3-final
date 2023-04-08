import React, { useContext } from 'react'
import Card from '../Components/Card'
import { GlobalContext } from '../Components/utils/global.context'

const Home = () => {

  const { theme, data } = useContext(GlobalContext);

  return (

    <main className={`${theme === "dark" ? "dark" : null}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map(({ id, name, username }) => (
          <Card key={id} name={name} username={username} id={id} />
        ))}
      </div>
    </main>
  );

};

export default Home