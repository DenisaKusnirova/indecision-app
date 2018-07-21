import React from 'react'
import { Element } from 'react-scroll'

export default () => {
    return (
        <Element name="references">
            <h1 className="reference-title">Referencie</h1>
            <div className="references-container">
                <div className="reference">
                    <p>
                        "Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit. <br/>
                        Integer nec odio. Praesent <br/>
                        libero. Sed cursus ante dapibus."
                    </p>
                    <h4>Jana, Prešov</h4>
                </div>
                <div className="reference">
                    <p>
                        "Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit. <br/>
                        Integer nec odio. Praesent <br/>
                        libero. Sed cursus ante dapibus."
                    </p>
                    <h4>Andrej, Košice</h4>
                </div>
                <div className="reference">
                    <p>
                        "Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit. <br/>
                        Integer nec odio. Praesent <br/>
                        libero. Sed cursus ante dapibus."
                    </p>
                    <h4>Peter, Sabinov</h4>
                </div>
            </div>
        </Element>
    )
}