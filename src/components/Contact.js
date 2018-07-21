import React from 'react'
import { Element } from 'react-scroll'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'

export default () => {
    return (
        <Element name="contact">
            <div className="contact-component">
            <h1 className="get-in-touch-title">Plánujete stavbu domu alebo rekonštrukciu? <br/> Neváhajte nás kontaktovať!</h1>
                <div className="get-in-touch-form">
                    <div className="get-in-touch-component">
                        <h2>
                            +421 907 956 964 <br/> rekonstrukcievychod@gmail.com
                            <hr className="contact-hr" />
                        </h2>
                    </div>
                </div>

                <div className="icons-component">
                    <div className="icon-component">
                        <img src={require('../styles/ContactIcons/car.png')} alt="Car icon" className="icon"/>
                        <h2>Bývate v okolí Prešova <br/> či Košíc? Zavolajte nám, <br/>zarezervujte si termín <br/>a my prídeme za Vami.</h2>
                    </div>
                    <div className="icon-component">
                        <img src={require('../styles/ContactIcons/calculator.png')} alt="Car icon" className="icon"/>
                        <h2>Bezplatne Vám pripravíme <br/> detailne vypracovanú kalkuláciu <br/> plánovaných prác, ktorá bude <br/> zahŕňať aj výslednú cenu.</h2>
                    </div>
                    <div className="icon-component">
                        <img src={require('../styles/ContactIcons/guarantee.png')} alt="Car icon" className="icon"/>
                        <h2>Za kvalitu našej práce ručíme. <br/> Naši majstri sú profesionáli <br/> s dlhoročnými skúsenosťami <br/> v stavebnom priemysle.</h2>
                    </div>
                </div>
            </div>
        </Element>
    )
}

// <div className="email-form">
//                     <h1 className="email-form-title">Pošlite nám správu</h1>
//                     <Form className="email-form-field">
//                     <Form.Field id='form-input-control' control={Input} className="email-form" placeholder='Váš email' />
//                     <Form.Field id='form-input-control' control={Input} className="email-form" placeholder='Predmet správy' />
//                     <Form.Field id='form-textarea-control' control={TextArea} className="email-form" placeholder='Text' />
//                     <Form.Field id='form-button-control' control={Button} className="email-form-button" content='POSLAŤ' />
//                     </Form>
//                 </div>
