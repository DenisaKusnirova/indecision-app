import React, { Component } from 'react'
import { Element } from 'react-scroll'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Calculator extends Component {
    displayResult() {
        return (<p className="result">Cena hrubej práce: </p>)
    }
    render() {
        return (
            <Element name="calculator" className="calculator-component">
            <div className="calculator-component-content">
                <h1 className="calculator-header">KALKULAČKA</h1>
                <Divider />

                {/* BUNGALOV */}
                <div className="calculator-component1">
                    <h2 className="calculator-subheading">Výstavba rodinného domu - hrubá stavba bungalov</h2>
                    <div  className="calculator-component1-fields">
                    <TextField
                        id="text-input"
                        label="ZÁKLADOVÁ DOSKA - m2"
                        margin="normal"
                        className="text-input"
                    />
                    <TextField
                        id="text-input"
                        label="ZASTAVANÁ PLOCHA - m2"
                        margin="normal"
                        className="text-input"
                    />
                    <Button variant="outlined" size="small">
                        Vypočítať cenu
                    </Button>
                    </div>
                    <p className="result">Cena hrubej práce: {}</p>
                </div>
                <Divider />

                {/* JEDNOPOSCHODOVY DOM */}
                <div className="calculator-component1">
                    <h2 className="calculator-subheading">Výstavba rodinného domu - hrubá stavba jednoposchodový dom</h2>
                    <div  className="calculator-component1-fields">
                    <TextField
                        id="text-input"
                        label="ZÁKLADOVÁ DOSKA - m2"
                        margin="normal"
                        className="text-input"
                    />
                    <TextField
                        id="text-input"
                        label="ZASTAVANÁ PLOCHA - m2"
                        margin="normal"
                        className="text-input"
                    />
                    <Button variant="outlined" size="small">
                        Vypočítať cenu
                    </Button>
                    </div>
                    <p className="result">Cena hrubej práce: </p>
                </div>
                <Divider />

                {/* REKONSTRUKCIA BYTU */}
                <div className="calculator-component1">
                    <h2 className="calculator-subheading">Kompletná rekonštrukcia bytu</h2>
                    <h2  className="calculator-subheading-room">TYP BYTOVÉHO JADRA</h2>
                    <h2  className="calculator-detail-title">Kliknutím na obrázok si zvolíte typ byt. jadra</h2>

                    <div  className="figure-component">
                        <figure>
                            <img src={require('../styles/Bytovejadra/typ-E.png')} alt="Stavba domu" className="calculator-img"/>
                            <figcaption>Typ T: Jadro je umiestnené medzi tromi panelovými stenami</figcaption>
                        </figure>
                        <figure>
                            <img src={require('../styles/Bytovejadra/typ-F.png')} alt="Stavba domu" className="calculator-img"/>
                            <figcaption>Typ E: Jadro je umiestnené k jednej panelovej stene</figcaption>
                        </figure>
                        <figure>
                            <img src={require('../styles/Bytovejadra/typ-H.png')} alt="Stavba domu" className="calculator-img"/>
                            <figcaption>Typ H: Jadro je umiestnené medzi dvoma panelovými stenami</figcaption>
                        </figure>
                        <figure>
                            <img src={require('../styles/Bytovejadra/typ-T.png')} alt="Stavba domu" className="calculator-img"/>
                            <figcaption>Typ F: Jadro tvar F je umiestnené medzi dvoma panelovými stenami v tvare L</figcaption>
                        </figure>
                    </div>
                    <h2  className="calculator-subheading-room">KUCHYŇA</h2>
                    <div  className="calculator-component1-fields">
                    <TextField
                        id="text-input"
                        label="ROZMER - dĺžka (m)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="ROZMER - šírka (m)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="POČET OKIEN (ks)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="POČET DVERÍ (ks)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    </div>
                    <h2  className="calculator-subheading-room">IZBA 1</h2>
                    <div  className="calculator-component1-fields">
                    <TextField
                        id="text-input"
                        label="ROZMER - dĺžka (m)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="ROZMER - šírka (m)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="POČET OKIEN (ks)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="POČET DVERÍ (ks)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    </div>
                    <h2  className="calculator-subheading-room">IZBA 2 (nepovinné)</h2>
                    <div  className="calculator-component1-fields">
                    <TextField
                        id="text-input"
                        label="ROZMER - dĺžka (m)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="ROZMER - šírka (m)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="POČET OKIEN (ks)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="POČET DVERÍ (ks)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    </div>
                    <h2  className="calculator-subheading-room">IZBA 3 (nepovinné)</h2>
                    <div  className="calculator-component1-fields">
                    <TextField
                        id="text-input"
                        label="ROZMER - dĺžka (m)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="ROZMER - šírka (m)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="POČET OKIEN (ks)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="POČET DVERÍ (ks)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    </div>
                    <h2  className="calculator-subheading-room">CHODBA</h2>
                    <div  className="calculator-component1-fields">
                    <TextField
                        id="text-input"
                        label="ROZMER - dĺžka (m)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="ROZMER - šírka (m)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    <TextField
                        id="text-input"
                        label="POČET DVERÍ (ks)"
                        margin="normal"
                        className="text-input-reconstruction"
                    />
                    </div>
                    <div  className="calculator-component-result">
                        <Button variant="outlined" size="small" className="button-reconstruction">
                            Vypočítať cenu
                        </Button>
                        <p className="result">Cena hrubej práce: {}</p>
                    </div>
                </div>
                <Divider />
            </div>
            </Element>
        )
    }
}

export default Calculator