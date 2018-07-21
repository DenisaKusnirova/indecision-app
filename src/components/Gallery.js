import React, { Component } from 'react'
import { Element } from 'react-scroll'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    marginTop: '50px',
    marginLeft: '84%',
    fontSize: '16px',
    fontWeight: '400',
    color: '#e78967',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
})

class Gallery extends Component {
  render() {
    const { classes } = this.props

    return (
        <Element name="gallery" className="gallery-component">
          <h1 className="gallery-header">GALÉRIA</h1>
          <div className="gallery-flex-box">
            <div className="container">
              <div className="gallery-flex-box">
                <img src={require('../styles/Gallery/image9.jpg')} alt="Stavba domu" className="gallery-img"/>
                <div className="overlay">
                  <div className="text">Hrubá stavba domu systémom strateného polystyrénového debnenia a ukladanie dlažby.</div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="gallery-flex-box">
                <img src={require('../styles/Gallery/image28.jpg')} alt="Stavba domu" className="gallery-img"/>
                <div className="overlay">
                  <div className="text">Kompletná rekonštrukcia kúpeľne. Vodoinštalácia, obklady a dlažby.</div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="gallery-flex-box">
                <img src={require('../styles/Gallery/image20.jpg')} alt="Stavba domu" className="gallery-img"/>
                <div className="overlay">
                    <div className="text">Hrubá stavba domu- Murovaný dom YTONG</div>
                </div>
              </div>
            </div>
          </div>
          <Button component={Link} to="/galeria" variant="outlined" size="medium" className={classes.button}>
            Celá galéria
          </Button>
        </Element>
    )
  }
}

export default withStyles(styles)(Gallery)
