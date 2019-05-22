import React from 'react'
import { AddressMarkup, ContactMarkup, InformationMarkup } from '../../AddressInputs/AddressInputs'


import './LibraryManager.css'

export default function LibraryManager(props) {
    const address = AddressMarkup({})
    const contact = ContactMarkup({})
    const information = InformationMarkup({})
    return (
        <div>
            libraries
            { information }
            <hr />
            { address }
            { contact }
        </div>
    )
}