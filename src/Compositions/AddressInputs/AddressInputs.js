import React, { Fragment } from 'react'
import { InputField, TextAreaField } from '../../components/FormFields/FormFields'

/**
 * Markup for post information
 *  
 * @param {object}      details 
 * @param {function}    updateHandler
 * @param {boolean}     editMode 
 */
export function InformationMarkup({ details = {}, updateHandler = null, editMode = false }) {
    
    const {
        title,
        description,
    } = details

    const editInformationMarkup = (
        <Fragment>
            <InputField 
                name = 'title'
                value = { title }
                type = 'text'
                label = 'Title'
            />
            <TextAreaField 
                name = 'description'
                value = { description }
                type = 'text'
                label = 'Description'
            />
        </Fragment>
    )

    const informationMarkup = (
        <section className='inform-details'>
            <section className='title'>
                <span>{ title }</span>
            </section>
            <section className='description'>
                <span>{ description }</span>
            </section>
        </section>
    )

    return editMode ? editInformationMarkup : informationMarkup
}

/**
 * Markup for address information
 *  
 * @param {object}      details
 * @param {boolean}     editMode 
 */
export function AddressMarkup({ details = {}, editMode = false }) {
    const { 
        addressLine1,
        addressLine2,
        zipcode,
    } = details
    
    const editAddressMarkup = (
        <Fragment>
            <InputField 
                name = 'addressLine1'
                value = { addressLine1 }
                type = 'text'
                label = 'Address Line 1'
            />
            <InputField 
                name = 'addressLine2'
                value = { addressLine2 }
                type = 'email'
                label = 'Address Line 2'
                required = { false }
            />
            <InputField 
                name = 'zipcode'
                value = { zipcode }
                type = 'tel'
                label = 'Zipcode'
            />
        </Fragment>
    )

    const addressMarkup = (
        <section className='address-details'>
            <section>
                <label htmlFor='addressLine1'>Address Line 1:</label>
                <span>{ addressLine1 }</span>
            </section>
            <section>
                <label htmlFor='addressLine2'>Address Line 2:</label>
                <span>{ addressLine2 }</span>
            </section>
            <section>
                <label htmlFor='zipcode'>Zipcode:</label>
                <span>{ zipcode }</span>
            </section>
        </section>
    )

    return editMode ? editAddressMarkup : addressMarkup
}

/**
 * Markup for contact information
 *  
 * @param {object}      details
 * @param {boolean}     editMode 
 */
export function ContactMarkup({ details = {}, editMode = false }) {
    
    const {
        contactName,
        contactEmail,
        contactPhone
    } = details

    const editContactMarkup = (
        <Fragment>
            <InputField 
                name = 'contactName'
                value = { contactName }
                type = 'text'
                label = 'Name'
            />
            <InputField 
                name = 'contactEmail'
                value = { contactEmail }
                type = 'email'
                label = 'Email'
            />
            <InputField 
                name = 'contactPhone'
                value = { contactPhone }
                type = 'tel'
                label = 'Phone'
            />
        </Fragment>
    )

    const contactMarkup = (
        <section className='contact-details'>
            <div>
                <label htmlFor='contactName'>Name: </label>
                <span>{ contactName }</span>
            </div>
            <div>
                <label htmlFor='contactEmail'>Email: </label>
                <span >{ contactEmail }</span>
            </div>
            <div>
                <label htmlFor='contactPhone'>Phone: </label>
                <span>{ contactPhone }</span>
            </div>
        </section>
    )

    return editMode ? editContactMarkup : contactMarkup
}