import React, { Component } from 'react'
import SignatureCanvas from 'react-signature-canvas'

class Signature extends Component {
    getSignature = (url) => {
        if (this.props.isEditing) {
            return (
                <img src={url} className="signature-image" />
            )
        }
        else {
            return (
                <div>
                    <SignatureCanvas penColor='black' onEnd={this.props.handleCanvasSignature} ref={(ref) => { this.props.sigCanvas = ref }} canvasProps={{width: 600, height: 200, className: 'sigCanvas'}} />
                    <br />
                    <button className="sigClear" onClick={this.clearCanvas}>Clear Signature</button>
                </div>
            )
        }

    }

    clearCanvas = (event) => {
        event.preventDefault()
        this.props.sigCanvas.clear()
    }

    render () {
        const esignature = this.getSignature(this.props.esigURL)
        return (
            <div className="signatureBox">
                <label>Signed by: </label><input type="text" wrap="hard" value={this.props.signature} onChange={this.props.handleSignature} />
                <div className="errorContainer">
                    <span className="errorMessage">{this.props.errorSig}</span>
                </div>
                <label>Signature:</label>
                <div className="e-signature-container">
                    { esignature }
                    <div className="errorContainer">
                        <span className="errorMessage">{this.props.errorESig}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signature