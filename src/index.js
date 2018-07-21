import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import App from './App'


export const Page = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}


ReactDOM.render(<Page />, document.getElementById('app'))
