import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    nombre: "",
    email: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  
    validateForm(name, value);
  };

  const validateForm = (name, value) => {
    let errors = { ...formErrors };

    switch (name) {
      case "nombre":
        errors.nombre = value.length < 5 ? "Nombre demasiado corto" : "";
        break;
      case "email":
       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errors.email = !emailRegex.test(value) ? "Formato de correo incorrecto" : "";
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.nombre || !formData.email || formErrors.nombre || formErrors.email) {
      console.log("Por favor, verifique su información nuevamente");
    } else {
    
      console.log(`Gracias ${formData.nombre}, te contactaremos cuanto antes vía mail`);
      setSubmitSuccess(true);
    }
  };

  return (
    <div>
      {submitSuccess ? (
        <p>Gracias {formData.nombre}, te contactaremos cuanto antes vía mail</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre completo:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          {formErrors.nombre && <span className="error" style={{ color: "red" }}>{formErrors.nombre}</span>}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {formErrors.email && <span className="error" style={{ color: "red" }}>{formErrors.email}</span>}
          {((!formData.nombre || !formData.email) && !formErrors.nombre && !formErrors.email) && (
            <span className="error" style={{ color: "red" }}> Por favor diligencia todos los campos</span>
          )}
          <button type="submit">Enviar</button>
          {(formErrors.nombre || formErrors.email) && (
            <span className="error" style={{ color: "red" }}>Por favor, verifique su información nuevamente</span>
          )}
        </form>
      )}
    </div>
  );
};

export default Contacto;
