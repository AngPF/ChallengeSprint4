import React from 'react';
import "./header.css"
import logoporto from '../assets/imagens/porto-seguro-logo.png'
import IconPerfil from '../assets/imagens/Icon.png'

const Header = () => {
    return (
        <div className="header">
            <img className="logoporto" src={logoporto} alt="LogoPortoSeguro" />
            <nav>
                <a href="/">Home</a>
                <a href="https://www.portoseguro.com.br/institucional/sobre-a-porto-seguro">Sobre nós</a>
                <a href="https://www.portoseguro.com.br/fale-conosco/contatos/encontre-um-corretor">Encontre um Corretor</a>
                <a href="https://www.portoseguro.com.br/pdc/login">Entrar</a>
                <img className="iconperfil" src={IconPerfil} alt="Icone Perfil" />
            </nav>
        </div>
    );
};
export default Header;