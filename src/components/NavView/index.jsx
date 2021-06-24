import React from 'react'
import flag from '../../assets/images/single/icon-flag.svg';
import puntitos from '../../assets/images/single/puntitos.svg';
import hearth from '../../assets/images/single/reaction-heart.svg';
import unicorn from '../../assets/images/single/icon-unicorn.svg';

export const NavView = () => {
    return (
        <section id="left-side" className="d-md-block col-md-1">
            <ul className="menu-inner-post">
                <li>
                    <div id="reaction-heart"><img src={hearth} alt='hearth' /></div>
                    <span id="reaction-number-heart"></span>

                </li>

                <li>
                    <div><img src={unicorn} alt='unicorn'/></div>
                    1
                </li>
                <li>
                    <div><img src={flag} alt='flag' /></div>
                    0
                </li>
                <li>
                    <div><img src={puntitos} alt='puntitos' /></div>
                </li>
            </ul>
        </section>
    )
}
