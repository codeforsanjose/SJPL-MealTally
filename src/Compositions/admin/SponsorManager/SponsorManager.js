import React from 'react'
import { AddressMarkup, ContactMarkup, InformationMarkup } from '../../AddressInputs/AddressInputs'


import './SponsorManager.css'

export default function SponsorManager(props) {
    const address = AddressMarkup({})
    const contact = ContactMarkup({})
    const information = InformationMarkup({})
    return (
        <div>
            Sponsors
            { information }
            <hr />
            { address }
            { contact }
        </div>
    )
}