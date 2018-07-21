import React from 'react'
import ReactDOM from 'react-dom'
import {  Route, Link } from 'react-router-dom'
import NavBar from './components/Navbar'
import Info from './components/Info'
import WhatWeDo from './components/WhatWeDo'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import GalleryFull from './components/GalleryFull'
import Footer from './components/Footer'
import Calculator from './components/Calculator'

class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <NavBar />
                        <Info />
                        <WhatWeDo />
                        <Gallery />
                        <Calculator />
                        <Contact />
                        <Footer />
                    </div>
                )} />
                <Route exact path="/galeria" render={() => (
                    <div>
                        <GalleryFull />
                    </div>
                )} />
            </div>
        )
    }
}

export default App