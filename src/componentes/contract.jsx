import React, { useState } from 'react';
import './contract.css'
import logoporto from '../assets/imagens/porto-seguro-logo.png'
import IconPerfil from '../assets/imagens/Icon.png'
import bike from '../assets/imagens/bike.png'
import { Link } from 'react-router-dom';


function Contract(){

        const [formValues, setFormValues] = useState({
          nome: '',
          cpf: '',
          email: '',
          endereco: '',
          cep: '',
          bairro: '',
          cidade: '',
          telefone: '',
          ddd: '',
          numero: '',
          campo1: '',
          campo2: '',
          valor: '',
          imagem1: null,
          imagem2: null,
          imagem3: null,
          imagem4: null,
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormValues({
            ...formValues,
            [name]: value,
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Dados do formulário:', formValues);
        };

return(
        <>
        <main className="main3">
            <section className='corpo'>
                <a href="/"><img className="logo" src={logoporto}alt="LogoPortoSeguro" /></a>
                <a href="https://www.portoseguro.com.br/pdc/login"><img className="icon" src={IconPerfil} alt="Icone Perfil" /></a>
    
    <form onSubmit={handleSubmit}>
      <label className='boxnome'>
        <h1>Nome Completo</h1>
        < input type="text" name="nome" placeholder='Nome Completo' value={formValues.nome} onChange={handleChange} required className='nome'/>
      </label>

      <label className='boxcpf'>
        <h1>CPF:</h1>
        <input type="text" name="cpf" placeholder='CPF' value={formValues.cpf} onChange={handleChange} maxLength={14} required className='cpf'/>
      </label>

      <label className='boxemail'>
        <h1>Email:</h1>
        <input type="email" name="email" placeholder='Ex: email@gmail.com' value={formValues.email} onChange={handleChange} className='email'/>
      </label>

      <label  className='boxtelefone'>
        <h1>Telefone:</h1>
        <input type="text" name="telefone" placeholder='Telefone'ovalue={formValues.telefone} onChange={handleChange} maxLength={9} className='telefone'/>
      </label>

      <label className='boxendereco'>
        <h1>Endereço:</h1>
        <input type="text" name="endereco" placeholder='Endereço' value={formValues.endereco} onChange={handleChange} required className='endereco' />
      </label>

      <label className='boxbairro'>
        <input type="text" name="bairro" placeholder='bairro' value={formValues.bairro} onChange={handleChange} className='bairro' />
      </label>

      <label className='boxcidade'>
        <input type="text" name="cidade" placeholder='cidade' value={formValues.cidade} onChange={handleChange} className='cidade' />
      </label>

      <label  className='boxcep'>
        <input type="text" name="cep" placeholder='CEP' value={formValues.cep} onChange={handleChange} required className='cep'/>
      </label>

      <label  className='boxddd'>
        <input type='text' name="ddd" placeholder='DDD' value={formValues.ddd} onChange={handleChange} maxLength={3} className='ddd'/>
      </label>

      <label  className='boxnumero'>
        <input type="text" name="numero" placeholder='Número' value={formValues.numero} onChange={handleChange} className='numero'/>
      </label>

      <label  className='boxbike'>
        <h1>Bike</h1>
        <textarea name="campo1"  placeholder='Qual valor da sua Bike?' value={formValues.campo1} onChange={handleChange} required className='bike' />
      </label>

      <label  className='boxupgrade'>
        <h1>Upgrades</h1>
        <textarea name="campo2" placeholder='Quais upgrades sua Bike tem?' value={formValues.campo2} onChange={handleChange} required className='upgrade' />
      </label>

      <label  className='boxvalor'>
        <h1>Valor</h1>
        <input type="text" name="valor" placeholder='Qual modelo da sua Bike?' value={formValues.valor} onChange={handleChange} required className='valor' />
        
      </label>

    <div className='bimg1'>
      <label  className='boximagem1'>
        <input type="file" name="imagem1" onChange={handleChange} required className='imagem1' />
        <h1>Adicione uma foto do lado direito da sua Bike.</h1>
        <img className='bikebx' src={bike} alt='bike'></img>
      </label>
    </div>

    <div className='bimg2'>
      <label className='boximagem2'>
      <input type="file" name="imagem2" onChange={handleChange} required className='imagem2'/>
      <h1>Adicione uma foto do lado direito da sua Bike.</h1>
      <img className='bikebx' src={bike} alt='bike'></img>
      </label>
    </div>

    <div className='bimg3'>
      <label className='boximagem3'>
      <input type="file" name="imagem3" onChange={handleChange} required className='imagem3'/>
      <h1>Adicione uma foto do lado direito da sua Bike.</h1>
      <img className='bikebx' src={bike} alt='bike'></img>
      </label>
    </div>

    <div className='bimg4'>
      <label className='boximagem4'>
      <input type="file" name="imagem4" onChange={handleChange} required className='imagem4' />
      <h1>Adicione uma foto do lado direito da sua Bike.</h1>
      <img className='bikebx' src={bike} alt='bike'></img>
      </label>
    </div>

      <button className='button7'type="submit"><Link to="/Final">Enviar</Link></button>
      
    </form>

             </section>
        </main>
        </>
    )
}

export default Contract;