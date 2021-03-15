import React from 'react';
import './styles.scss';

type Props = {
    textBtn: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ textBtn, onClick }: Props) => (
    <button className="btn-rectangle btn-content" onClick={onClick}>
        { textBtn}
    </button>
);

export default Button;