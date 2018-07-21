import React, { Component } from 'react'
import Lightbox from 'react-images';

class GalleryFull extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lightboxIsOpen: true,
			currentImage: 1
    }
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
  }
  
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
  }

  gotoImage = (index) => {
		this.setState({
			currentImage: index,
		});
	}
  
    render() {
        return (
            <div>
              <Lightbox
                currentImage={this.state.currentImage}
                images={[
                  { src: '../styles/Gallery/image1.jpg' }, 
                  { src: 'http://www.clker.com/cliparts/3/m/v/Y/E/V/small-red-apple-hi.png' }, 
                  { src: 'http://www.clker.com/cliparts/3/m/v/Y/E/V/small-red-apple-hi.png' }, 
                  { src: 'https://openclipart.org/download/216413/coniglio_rabbit_small.svg' }]}
                isOpen={this.state.lightboxIsOpen}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                onClickThumbnail={this.gotoImage}
                showThumbnails={true}
              />
            </div>
        )
    }
}

export default GalleryFull