import React from 'react';
import Button from '../../../core/components/Button';
import { PerfilGit } from '../../../core/types/PerfilGit';
import './styles.scss';

type Props = {
    perfil: PerfilGit;
}
const SearchResult = ({ perfil }: Props) => {
    return (
        <div className="search-result-container">

            <div className="search-result-box">
                <div>
                    <div className="box-shows-quantities search-result-box-repositorio">
                        Repositórios públicos: {perfil.public_repos}
                    </div>
                    <div className="box-shows-quantities search-result-box-seguidores">
                        Seguidores: {perfil.followers}
                    </div>
                    <div className="box-shows-quantities search-result-box-seguido">
                        Seguindo: {perfil.following}
                    </div>
                </div>
            </div>

            <div className="search-profile-photo">
                <img src={perfil.avatar_url} alt="Avatar" className="img-avatar" />
                <Button textBtn="Ver perfil" />
            </div>

            <div className="search-information">
                <h1 className="search-information-title">Informações</h1>
                <div className="search-information-content">
                    <label className="label-bold">Empresa:</label> {perfil.company}
                </div>
                <div className="search-information-content">
                    <label className="label-bold">Website/Blog:</label> {perfil.blog}
                </div>
                <div className="search-information-content">
                    <label className="label-bold">Localidade:</label> {perfil.location}
                </div>
                <div className="search-information-content">
                    <label className="label-bold">Membro desde:</label> {perfil.created_at}
                </div>
            </div>
        </div>
    );
}

export default SearchResult;