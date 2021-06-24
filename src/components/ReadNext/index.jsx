import React from 'react'
import imgKau from '../../assets/images/single/user6.webp';
import user7 from '../../assets/images/single/user7.webp';
import user8 from '../../assets/images/single/user8.webp';


export const ReadNext = () => {
    return (
        <article id="read-next" className="card mb-3 w-100">
            <div className="card-body">
                <h2 className="card-title pl-4">Read next</h2>
                <div className="list-next pl-4">
                    <a href="#">

                        <div className="next-article d-flex align-items-center">

                            <img className="ico-profile rounded-circle border border-secondary" loading="lazy"
                                alt="kauresss profile image" src={imgKau} />

                            <div className="d-flex flex-column justify-content-center ">
                                <h4>Getting paid less to do the same work on Upwork</h4>
                                <p className="text-muted">
                                    Kauress - <time dateTime="2021-03-06T00:21:07Z">Mar 6</time>
                                </p>
                            </div>
                        </div>

                    </a>
                    <a href="#">
                        <div className="next-article d-flex align-items-center">
                            <span>
                                <img className="ico-profile rounded-circle border border-secondary" loading="lazy"
                                    alt="bekbrace profile image" src={user7} />
                            </span>
                            <div className="d-flex flex-column justify-content-center">
                                <h4>Stripe for online payments</h4>
                                <p className="text-muted">
                                    Bek Brace - <time dateTime="2021-03-05T17:46:15Z">Mar 5</time>
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="next-article d-flex align-items-center">

                            <img className="ico-profile rounded-circle border border-secondary" loading="lazy"
                                alt="jackssonandrey profile image" src={user8} />

                            <div className="d-flex flex-column justify-content-center">
                                <h4>Usando Docker e docker-composer no dia a dia</h4>
                                <p className="text-muted">
                                    Andrey Araújo - <time dateTime="2021-03-05T22:40:24Z">Mar 5</time>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </article>
    )
}
