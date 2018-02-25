import * as React from 'react'

require('./LogoComponent.css');


class LogoComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }    

    render() {
        
        return (
            <div className="logoContainer">
                <a href="http://www.givelight.org"><div className="logo"></div></a>
            </div>
        )
    }
}

export default LogoComponent
