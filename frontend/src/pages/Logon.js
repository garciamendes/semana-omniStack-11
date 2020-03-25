import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

// imports local
import api from '../services/Api'
import '../css/logon.css';
import logonImg from '../assets/logo.svg';
import heroesImg from '../assets/heroes.png';

function Logon() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('session', { id });

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name);
      
      history.push('/profiles')
    }catch (err) {
      alert('Falha no login tente novamente')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logonImg} alt="Be The Heroes" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder='Sua ID'
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button
            type="submit"
            className='button'
          >
            Entrar
          </button>

          <Link className='back-link' to='/register'>
            <FiLogIn
              size={16}
              color="#e02041"
            />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt='Heroes' />

    </div>
  )
}

export default Logon;
