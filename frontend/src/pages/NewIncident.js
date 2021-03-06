import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

//imports local
import '../css/newIncidents.css';
import logonImg from '../assets/logo.svg';
import api from '../services/Api'

function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId')


  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })

      history.push('/profiles')
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }

  }

  return (
    <div className="new-incident">
      <div className="content">

        <section>
          <img src={logonImg} alt="Heroes" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhamente para encotrar um herói para resolver isso.
        </p>

          <Link className='back-link' to='/profiles'>
            <FiArrowLeft
              size={16}
              color="#e02041"
            />
          Voltar para Home
        </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder='Título do caso'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder='Descrição'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input
            placeholder='Valor em reais'
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button
            type="submit"
            className='button'>
            Cadastrar
        </button>
        </form>

      </div>
    </div>
  )
}

export default NewIncident;