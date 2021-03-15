import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Moment from 'react-moment';
import Button from 'core/components/Button';
import { PerfilGit } from 'core/types/PerfilGit';
import { makeRequest } from 'core/utils/request';
import ImageLoader from '../Loaders/ImageLoader';
import InfoLoader from '../Loaders/InfoLoader';
import './styles.scss';

type Props = {
    login: string;
}

const ResultSearch = ({ login }: Props) => {

    const [perfil, setPerfil] = useState<PerfilGit>();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [dataNotFound, setDataNotFound] = useState<boolean>(false);

    useEffect(() => {

        setIsLoading(true);

        setDataNotFound(false);

        makeRequest({ url: `/users/${login}` })
            .then(response => {

                setPerfil(response.data);

                if (login !== ''
                    && (response.data.name === undefined
                        || response.data.name === null
                        || response.data.name === '')) {
                    setDataNotFound(true);
                }
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, [login]);

    const handleOnonClickPerfil = () => {

        if (perfil?.html_url !== undefined
            && perfil?.html_url !== null
            && perfil?.html_url !== '') {
            window.open(perfil?.html_url, '_blank');
        } else {
            toast.info('Não exitem dados do perfil cadastrado.', {
                className: 'toast-notification',
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    return (
        <div>
            <ToastContainer />
            {dataNotFound &&
                <div className="data-not-found">Dados não encontrado para o usuário github&nbsp;
                   <label className="label-login">{login}</label>
                </div>
            }
            <div className="search-result-container">

                <div className="search-result-box">
                    <div>
                        <div className="box-shows-quantities search-result-box-repositorio">
                            Repositórios públicos: {perfil?.public_repos}
                        </div>
                        <div className="box-shows-quantities search-result-box-seguidores">
                            Seguidores: {perfil?.followers}
                        </div>
                        <div className="box-shows-quantities search-result-box-seguido">
                            Seguindo: {perfil?.following}
                        </div>
                    </div>
                </div>

                <div className="search-profile-photo">
                    {isLoading ? <ImageLoader /> :
                        <div>
                            <img src={perfil?.avatar_url} alt="Avatar" className="img-avatar" />
                            <Button textBtn="Ver perfil" onClick={() => handleOnonClickPerfil()} />
                        </div>
                    }
                </div>

                <div className="search-information">
                    {isLoading ? <InfoLoader /> :
                        <div>
                            <h1 className="search-information-title">Informações</h1>
                            <div className="search-information-content">
                                <label className="label-bold">Empresa:</label> {perfil?.company}
                            </div>
                            <div className="search-information-content">
                                <label className="label-bold">Website/Blog:</label> {perfil?.blog}
                            </div>
                            <div className="search-information-content">
                                <label className="label-bold">Localidade:</label> {perfil?.location}
                            </div>
                            <div className="search-information-content">
                                <label className="label-bold">Membro desde:</label>
                                <Moment format="DD/MM/YYYY">{perfil?.created_at}</Moment>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
}

export default ResultSearch;