import * as React from 'react'
import appConfig from '../../AppContentConfig.json'

require('./LogoComponent.css');


class LogoComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }    
    backgroundImage() {
        // TODO:  need to figure out way to do this
        return {
            backgroundImage: appConfig['app_logo_url']
        }
    }
    render() {
        return (
            <div className="logoContainer">
                <a href={appConfig['app_org_url']}><div style={this.backgroundImage()} className="logo"></div></a>
            </div>
        )
    }
}

export default LogoComponent
