import { useState } from 'react';

const RealTimeForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const validate = (field, value) => {
    switch (field) {
      case 'name':
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: value.length < 3 ? 'El nombre debe tener al menos 3 caracteres' : ''
        }));
        break;
      case 'email':
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: /\S+@\S+\.\S+/.test(value) ? '' : 'El correo no es válido'
        }));
        break;
      case 'password':
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: value.length < 6 ? 'La contraseña debe tener al menos 6 caracteres' : ''
        }));
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  return (
    <form>
      <div>
        <label>Nombre</label>
        <input name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Correo</label>
        <input name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span>{errors.password}</span>}
      </div>
    </form>
  );
};

export default RealTimeForm;
