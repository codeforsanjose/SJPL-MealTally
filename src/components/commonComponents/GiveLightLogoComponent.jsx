import * as React from 'react'

require('./GiveLightLogoComponent.css');


class GiveLightLogoComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }    

    render() {
        
        return (
            <div className="giveLightLogoContainer">
                <a href="http://www.givelight.org"><div className="giveLightLogo"></div></a>
            </div>
        )
    }
}

export default GiveLightLogoComponent
