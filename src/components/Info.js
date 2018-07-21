import React, { Component } from 'react'
import { Element } from 'react-scroll'
import WhatWeDo from './WhatWeDo'

class Info extends Component {
   render() {
       return (
            <Element name="whatWeDo" className="info-bcg">
                <div className="info-component">
                    <h1 className="info-header">ČO ROBÍME</h1>
                    <div className="info-photos">
                        <div className="info-box">
                            <img src={require('../styles/WorksIcons/house.png')} alt="Car icon" className="icon-whatWeDo"/>
                            <p className="info-subheader">
                                Hrubá stavba murovaných <br/>
                                domov a domov stavaných <br/>
                                systémom strateného <br/>
                                polystyrénového debnenia.
                            </p>
                        </div>
                        <div className="info-box">
                            <img src={require('../styles/WorksIcons/reconstruction.png')} alt="Car icon" className="icon-whatWeDo"/>
                            <p className="info-subheader">
                                Kompletné rekonštrukcie <br/>
                                bytov, bytových jadier, <br/>
                                kuchýň a kúpeľní. Búracie <br/>
                                práce, sadrokartón, maľovanie.
                            </p>
                        </div>
                        <div className="info-box">
                            <img src={require('../styles/WorksIcons/wheelbarrow.png')} alt="Car icon" className="icon-whatWeDo"/>
                            <p className="info-subheader">
                                Rôzne vonkajšie práce <br/>
                                ako napríklad terénne <br/>
                                úpravy, ukladanie dlažby <br/>
                                stavba altánkov či terás.
                            </p>
                        </div>
                    </div> 
                 </div>
            </Element>
        )
    }
}

export default Info