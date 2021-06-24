import React from 'react'
import flag from '../../assets/images/single/icon-flag.svg';
import puntitos from '../../assets/images/single/puntitos.svg';
import hearth from '../../assets/images/single/reaction-heart.svg';
import unicorn from '../../assets/images/single/icon-unicorn.svg';

export const NavViewMobile = () => {
    return (
        <section id="left-side" className="position-fixed fixed-bottom">
            <ul className="menu-inner-post d-flex flex-row justify-content-between">
                <li className="d-flex flex-row">
                    <div id="reaction-heart"><img src={hearth} alt='hearth' /></div>
                    <span id="reaction-number-heart">0</span>

                </li>

                <li className="d-flex flex-row">
                    <div><img src={unicorn} alt='unicorn' /></div>
                    1
                </li>
                <li className="d-flex flex-row">
                    <div><img src={flag}  alt='flag' /></div>
                    0
                </li>
                <li className="d-flex flex-row">
                    <div><img src={puntitos} alt='puntitos' /></div>
                </li>
            </ul>
        </section>
    )
}
