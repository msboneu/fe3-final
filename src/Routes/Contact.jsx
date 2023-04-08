import React, { useContext } from 'react'
import Form from '../Components/Form'
import { GlobalContext } from '../Components/utils/global.context'

const Contact = () => {

  const { theme } = useContext(GlobalContext)

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form role="form" />
    </div>
  )

}

export default Contact