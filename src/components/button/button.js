import React from 'react';
import './button.css';



const Button = ({progress,closeWindow}) =>  {
    if (progress !== 100) return null
    return (
        <div className="tasks__btn button">
            <button
                onClick={ closeWindow }
                >
                <span> Поставить рубашку</span>
            </button>
        </div>
    );
}

export default Button