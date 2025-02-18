import { useState } from 'react';
import './FormularioSincronizado.css';

function FormularioSincronizado() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del formulario:', formData);
    alert(
      `Formulario enviado:\\nNombre: ${formData.nombre}\\nEmail: ${formData.email}\\nTeléfono: ${formData.telefono}`
    );
  };

  return (
    <div className='container'>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div className='formGroup'>
          <label htmlFor='nombre' className='label'>
            Nombre:
          </label>
          <input
            type='text'
            id='nombre'
            name='nombre'
            value={formData.nombre}
            onChange={handleChange}
            className='input'
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='email' className='label'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='input'
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='telefono' className='label'>
            Teléfono:
          </label>
          <input
            type='tel'
            id='telefono'
            name='telefono'
            value={formData.telefono}
            onChange={handleChange}
            className='input'
            required
          />
        </div>
        <button type='submit' className='button'>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormularioSincronizado;
