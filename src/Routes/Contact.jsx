import React from 'react'
import Form from '../Components/Form'

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>¿Quieres más información?</h2>
      <div style={{ marginTop: '50px' }}> {/* Espacio superior */}
        <Form />
      </div>
    </div>
  )
}

export default Contact
