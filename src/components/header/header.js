import React from 'react';
import './header.css';


const Header  = ({timer}) => {
    
    const {days, hours, minutes, seconds} = timer;

        return (
            <header className="header">
            <div className="header__logo logo">
                <img  src="/header.png" alt=""/>
            </div>
            <div className="header__timer">
                <div className="header__item">
                    <div className="header__time">
                        {days}
                    </div>
                    <div className="header__caption">
                        дней
                    </div>
                </div>
                <div className="header__item">
                    <div className="header__time">
                        {hours}
                    </div>
                    <div className="header__caption">
                        часов
                    </div>
                </div>
                <div className="header__item">
                    <div className="header__time">
                        {minutes}
                    </div>
                    <div className="header__caption">
                        минут 
                    </div>
                </div>
                <div className="header__item">
                    <div className="header__time">
                        {seconds}
                    </div>
                    <div className="header__caption">
                        секунд
                    </div>
                </div>
            </div>
        </header>
    
        );    
}

export default Header