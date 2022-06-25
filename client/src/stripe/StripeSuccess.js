/**
 * src/stripe/StripeSuccess.js
 * on this page lets use useEffect()
 * to make request to backend
 * so that we can create a new order for the user who paid for booking
 * so that we can show the booking in user purchase/booking history
 */

import { LoadingOutlined } from '@ant-design/icons'
import React, {useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import {stripeSuccessRequest} from '../actions/stripe'



const StripeSuccess = ({match, history}) => {
    const {auth} = useSelector((state) => ({...state }))
    const {token} = auth;

    useEffect(() => {
        // console.log('send this hotelId to backend to create order',
        // match.params.hotelId)

        stripeSuccessRequest(token, match.params.hotelId)
        .then(res => {
            if (res.data.success) {
            console.log('stripe success response', res.data)
            history.push('/dashboard');
            } else {
            history.push('/stripe/cancel');
            }
        })

    }, [match.params.hotelId]);
    return (
        <div className='container'>
            <div className='d-flex justify-centent-center p-5'>
                <LoadingOutlined className="display-1 text-danger p-5" 
                 />
            </div>

        </div>
    )
}

export default StripeSuccess;