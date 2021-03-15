import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'core/components/Button';
import ResultSearch from './components/ResultSearch';
import './styles.scss';

type FormField = {
    login: string;
}

type SearchData = {
    login: string;
}

const Search = () => {

    const [formField, setFormField] = useState<FormField>({
        login: ''
    });

    const [searchData, setSearchData] = useState<SearchData>({
        login: ''
    });

    const [isResult, setIsResult] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if (formField.login !== '') {
            setSearchData({ login: formField.login });
            setFormField({ login: '' });
            setIsResult(true);
        } else {
            toast.info('O campo Usuário Github é obrigatório para realizar a pesquisa.', {
                className: 'toast-notification',
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const name = event.target.name;
        const value = event.target.value;

        setFormField(data => ({ ...data, [name]: value }));
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
                        value={formField.login}
                        name="login"
                        onChange={handleOnChange}
                        placeholder="Usuário Github"
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

            <ToastContainer />

            { isResult && (<ResultSearch login={searchData.login} />)}

        </div>
    );
}

export default Search;