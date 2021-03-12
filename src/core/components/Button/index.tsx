import React from 'react';
import './styles.scss';

type Props = {
    textBtn: string;
}

const Button = ({ textBtn }: Props) => (
    <button className="btn-rectangle btn-content">
        { textBtn}
    </button>
);

export default Button;