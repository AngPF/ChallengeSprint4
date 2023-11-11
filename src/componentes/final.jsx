import React from 'react';
import './final.css'
import logoporto from '../assets/imagens/porto-seguro-logo.png'
import IconPerfil from '../assets/imagens/Icon.png'
import bike from '../assets/imagens/bike.png'
import { Link } from 'react-router-dom';
function Final() {
    
    return (
    <>
    <main className='main4'>
      <section className='corpo2'>
      <a href="/"><img className="logo" src={logoporto}alt="LogoPortoSeguro" /></a>
                <a href="https://www.portoseguro.com.br/pdc/login"><img className="icon" src={IconPerfil} alt="Icone Perfil" /></a>
            <div className='title'>
                <h1>Verificacao do cadastro e plano</h1>
            </div>
        <div className='container'>
            <h1>Dados do cliente</h1>
            <h2>Dados Da Bike</h2>
            <h3>Nome do Cliente:</h3>
            <h4>E-mail:</h4>
            <h5>CPF:</h5>
            <h6>Telefone:</h6>
            <h7>Endereco:</h7>

        <div className='bimg5'>
      <label  className='boximagem5'>
        <img className='bikebx2' src={bike} alt='bike'></img>
      </label>
    </div>

        <div className='bimg6'>
     <label className='boximagem6'>
      <img className='bikebx2' src={bike} alt='bike'></img>
      </label>
    </div>

    <div className='bimg7'>
      <img className='bikebx2' src={bike} alt='bike'></img>
    </div>

    <div className='bimg8'>
      <label className='boximagem8'>
      <img className='bikebx2' src={bike} alt='bike'></img>
      </label>
    </div>
    <h8>Modelo:</h8>
    <h9>Upgrades:</h9>
        </div>
        <button className='button9'>Finalizar</button>
        <button className='button10'><Link to="/">Cancelar</Link></button>
      </section>
    </main>
    </>
    );
}

export default Final;