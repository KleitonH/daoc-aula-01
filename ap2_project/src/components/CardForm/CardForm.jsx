import React, { useState } from 'react';
import './CardForm.css';


const CardForm = ({ addCard }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    question1: '',
    question2: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.title || !formData.description || !formData.image || !formData.question1 || !formData.question2) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }


    addCard(formData);
    setFormData({ title: '', description: '', image: '', question1: '', question2: '' });
  };


  return (
    <form onSubmit={handleSubmit} className="card-form mb-4">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Nome"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Telefone"
        required
      />
      <div>
        <label>Você é egresso ou convidado?</label>
        <div className='radio-group'>
          <label>
            <input
              type="radio"
              name="question1"
              value="Egresso"
              checked={formData.question1 === 'Egresso'}
              onChange={handleChange}
              required
            />
            Egresso
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="Convidado"
              checked={formData.question1 === 'Convidado'}
              onChange={handleChange}
              required
            />
            Convidado
          </label>
        </div>
      </div>
      <div>
        <label>Já está pago?</label>
        <div className='radio-group'>
          <label>
            <input
              type="radio"
              name="question2"
              value="Já pagou"
              checked={formData.question2 === 'Já pagou'}
              onChange={handleChange}
              required
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="Precisa pagar"
              checked={formData.question2 === 'Precisa pagar'}
              onChange={handleChange}
              required
            />
            Não
          </label>
        </div>
      </div>
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="URL da Imagem"
        required
      />
      <button type="submit">Adicionar Card</button>
    </form>
  );
};


export default CardForm;
