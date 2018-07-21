import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className="footer-component">
                <div className="footer-info">
                    <div className="footer-cont-info">
                        <h3>INFO</h3>
                        <p>
                            Ing. Jozef Kušnír, IČO: 12345678. Fyzická osoba zapísaná <br/>
                            v Živnostenskom registri Okresného úradu Prešov <br/>
                            od 1. mája 2018. Číslo živnostenského registra: 111-123456 
                        </p>
                        <h3>ADRESA</h3>
                        <p>
                            Štúrova 416/5 <br/>
                            082 22 Šarišské Michaľany
                        </p>
                    </div>
                    <div className="footer-cont-info">
                        <h3>KONTAKT</h3>
                        <p>
                            Tel.: +421 907 956 964 <br/>
                            Email: rekonstrukcievychod@gmail.com
                        </p>
                        <p>
                            Photo by H E N G S T R E A M on Unsplash
                        </p>
                        <p>Icons downloaded from 
                            <a 
                                href="https://icons8.com/" 
                                target="_blank"
                                className="footer-link"
                            >
                                <span/> ICONS8
                            </a>
                        </p>
                        <p>
                            ©rekonstrukcievychod. All rights reserved. <br/>Web vytvoril: <span /> 
                                <a 
                                    href="https://denisakusnirova.github.io/portfolio/"
                                    target="_blank" 
                                    className="footer-link">
                                     DenisaK.
                                </a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer