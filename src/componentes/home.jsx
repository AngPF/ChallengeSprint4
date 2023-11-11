import React from 'react';
import './home.css'

import bikeshadow from '../assets/imagens/bikeshadow.png'
import check from '../assets/imagens/check.png'
import montanha from '../assets/imagens/montanha.jpg'
import pedal_leve from '../assets/imagens/pedal_leve.jpg'
import pedal_essencial from '../assets/imagens/pedal_essencial.jpg'
import pedal_elite from '../assets/imagens/pedal_elite.jpg'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <main>
                
                <section className="conteudotop">
                    <h1>Quem tem Porto, tem <br /> mais tranquilidade <br /> para pedalar</h1>
                    <img className='check' src={check} alt='simbolo check'></img>
                    <h2>Porto Seguro Bike</h2>
                </section>
                <img className='shadow' src={bikeshadow} alt='sombra bike'></img>
                <img className='montanha' src={montanha} alt='montanha'></img>
                <section className='conteudomid'>
                    <h1>Com o Porto Seguro Bike, você escolhe <br /> as coberturas de acordo com as suas <br/> necessidades.</h1>
                    <h3>São diversas coberturas para você <br /> só se preocupar em pedalar:</h3>
                </section>

                <section className='conteudobottom'>
                    <h1>Planos de Serviço</h1>
                    <h2>Além de ter um seguro mais completo, agora você conta com 3 planos de serviços que foram criados para cuidar ainda mais de você e da sua bicicleta.</h2>
                
                <section className='conteudobox'>
                    <div className='box1'>
                        <img className='pedal_leve' src={pedal_leve} alt='pedal leve'></img>
                        <h1>Pedal Leve</h1>
                        <h2>Plano leve para aqueles que <br /> amam passear com sua bike</h2>
                        <button className='button1'><Link to="/Plans">Saiba Mais.</Link></button>
                    </div>
                    <div className='box2'>
                        <img className='pedal_essencial' src={pedal_essencial} alt='pedal essencial'></img>
                        <h1>Pedal Essencial</h1>
                        <h2>Plano essencial para quem busca <br /> uma saude melhor</h2>
                        <button className='button2'><Link to="/Plans">Saiba Mais.</Link></button>
                    </div>
                    <div className='box3'>
                        <img className='pedal_elite' src={pedal_elite} alt='pedal elite'></img>
                        <h1>Pedal Elite</h1>
                        <h2>Plano essencial para quem quer <br /> desfrutar o maior potencial</h2>
                        <button className='button3'><Link to="/Plans">Saiba Mais.</Link></button>
                    </div>
                </section>
                
                </section>
                
            </main>
        </>
    );
}

export default Home;
