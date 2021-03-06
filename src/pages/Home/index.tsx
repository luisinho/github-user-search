import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';

const Home = () => (
    <div className="home-content">
        <h1 className="home-text-title">
            Desafio do Capítulo 3, <br />
            Bootcamp DevSuperior
        </h1>
        <div>
            <h4 className="home-text-sub-title">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br />
              Favor observar as instruções passadas no capítulo sobre a <br />
              elaboração deste projeto. <br />
              Este design foi adaptado a partir de Ant Design System for Figma, de <br />
              Mateusz Wierzbicki: antforfigma@gmail.com
            </h4>
        </div>
        <div className="home-btn-comecar">
            <Link to="/search" className="button-link-decoration">
                <Button />
            </Link>
        </div>
    </div>
);

export default Home;