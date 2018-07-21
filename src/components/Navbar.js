import React, {Component} from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class NavBar extends Component {
    state = {
        navbarClassNames: 'navbar'
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
      
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    
    handleScroll = (event) => {
        const scrollTop = document.scrollingElement.scrollTop
    
        this.setState(() => ({
          navbarClassNames: scrollTop > 0 ? 'navbar navbar-solid' : 'navbar',
        }))
    }
    
    render() {
        return (
            <div>
                <div className={this.state.navbarClassNames}>
                    <Link to="whatWeDo" spy={true} smooth={true} duration={500} className="navbar-item">
                        Čo robíme
                    </Link>
                    <Link to="gallery" spy={true} smooth={true} duration={500} className="navbar-item">
                        Galéria
                    </Link>
                    <Link to="calculator" spy={true} smooth={true} duration={500} className="navbar-item">
                        Kalkulačka
                    </Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} className="navbar-item">
                        Kontakt
                    </Link>
                </div>
                <div className="home-page-container">
                    <div className="homepage-title">
                        <p>
                            Sme stavebná firma pôsobiaca <br/>
                            na východnom Slovensku s takmer <br/>
                            desaťročnou praxou. <br/>
                        </p>
                        <hr className="homepage-text-divider"/>
                        {/* <Link to="contact" spy={true} smooth={true} duration={500} className="button-homepage">
                            KONTAKT
                        </Link> */}
                        <Link to="calculator" spy={true} smooth={true} duration={500} className="button-homepage">
                            PROJEKTOVÁ KALKULAČKA
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar