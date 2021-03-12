import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import { PerfilGit } from '../../core/types/PerfilGit';
import { makeRequest } from '../../core/utils/request';
import SearchResult from './SearchResult';
import './styles.scss';

type FormsState = {
    login: string;
}

const Search = () => {

    const [formData, setFormData] = useState<FormsState>({
        login: ''
    });

    const [perfilGit, setPerfilGit] = useState<PerfilGit>();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postRequest();
    }

    const postRequest = () => {

        makeRequest({ url: `/users/${formData.login}` })
            .then(response => setPerfilGit(response.data))
            .finally(() => setFormData({ login: '' }));
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }));
    }

    return (
        <div>
            <div className="search-container">
                <h1 className="search-text-title">
                    Encontre um perfil Github
                </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        id="login"
                        value={formData.login}
                        name="login"
                        onChange={handleOnChange}
                        placeholder="Login perfil"
                        className="search-input"
                    />
                    <div className="search-button">
                        <Button textBtn="Encontrar" />
                        <Link to="/">
                            <Button textBtn="Voltar" />
                        </Link>
                    </div>
                </form>
            </div>

            { perfilGit && (<SearchResult perfil={perfilGit} />)}

        </div>
    );
}

export default Search;