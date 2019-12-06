import appConfig from '../AppContentConfig.json'

require('./LogoComponent.css');

const LogoComponent = () => {
    const backgroundImage = () => {
        return (
            {backgroundImage: appConfig['app_logo_url']}
        )
    }
    return(
        <div className="logoContainer">
                <a href={appConfig['app_org_url']}><div style={this.backgroundImage()} className="logo"></div></a>
            </div>
    )
}

export default LogoComponent
