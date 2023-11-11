import React from "react";
import './plans.css';
import pedal_leve from '../assets/imagens/pedal_leve.jpg'
import pedal_essencial from '../assets/imagens/pedal_essencial.jpg'
import pedal_elite from '../assets/imagens/pedal_elite.jpg' 
import logoporto from '../assets/imagens/porto-seguro-logo.png'
import IconPerfil from '../assets/imagens/Icon.png'
import { Link } from 'react-router-dom';
function Plans(){
    return(
        <>
    <main className="main2">
    <a href="/"><img className="logo" src={logoporto}alt="LogoPortoSeguro" /></a>
    <a href="https://www.portoseguro.com.br/pdc/login"><img className="icon" src={IconPerfil} alt="Icone Perfil" /></a>
        <section className="retangulotop">
            <h1>Pedal Leve</h1>
            <h3>
            <p>✔ Reparo de camaras de ar</p>
            <p>✔ Reparo ou troca de correntes</p>
            <p>✔ Substituicao ou regulagem de selim e canote de selim</p>
            <p>✔ Substituição e regulagem manetes de freios e cabo de aço</p>
            <p>✔ Substituição ou regulagem de freio dianteiro e traseiro</p>
            </h3>
            <div className="boxleve">
            <img className='leve' src={pedal_leve} alt='pedal leve'></img>
            <button className='button4'><Link to="/Contract">Assinar</Link></button>
            </div>
        </section>

        <section className="retangulomid">
            <h1>Plano Essencial</h1>
            <h3>
            <p>✔ Reparo de câmaras de ar</p>
            
            <p>✔ Reparo ou troca de correntes</p>
            
            <p>✔ Substituição ou regulagem de selim e canote de selim</p>
            
            <p>✔ Substituição e regulagem manetes de freios e cabo de aço</p>
            
            <p>✔ Substituição ou regulagem de freio dianteiro e traseiro</p>

            <p>✔ Lubrificação de correntes e coroas</p>
            
            <p>✔ Transporte do segurado e Bike - limite de 50km, em caso de quebra ou acidente</p>
            </h3>
            <div className="boxessencial">
            <img className='essencial' src={pedal_essencial} alt='pedal essencial'></img>
            <button className='button5'><Link to="/Contract">Assinar</Link></button>
            </div>
        </section>
        
        <section className="retangulobottom">
            <h1>Plano Elite</h1>
            <h3>
            <p>✔ Reparo de câmaras de ar</p>
            
            <p>✔ Reparo ou troca de correntes</p>
            
            <p>✔ Substituição ou regulagem de selim e canote de selim</p>
            
            <p>✔ Substituição e regulagem manetes de freios e cabo de aço</p>
            
            <p>✔ Substituição ou regulagem de freio dianteiro e traseiro</p>
            
            <p>✔ Lubrificação de correntes e coroas</p>
            
           <p>✔ Transporte do segurado e Bike - limite de 50km, em caso de quebra ou acidente</p>
            
            <p>✔ Transporte do segurado e Bike - limite de 150km, em caso de quebra ou acidente</p>
            
            <p>✔ Transporte do segurado e Bike - limite de 150km, em caso de quebra ou acidente</p>
            
            <p>✔ Serviço de Leva e Traz, com limite de 50km, mediante agendamento prévio</p>
            </h3>
            <div className="boxelite">
            <img className='elite' src={pedal_elite} alt='pedal elite'></img>
            <button className='button6'><Link to="/Contract">Assinar</Link></button>
            </div>
        </section>
        <footer className="footer2">
            <p>Copyright 2023 My Website</p>
        </footer>
        </main>

        </>
    )
}

export default Plans;