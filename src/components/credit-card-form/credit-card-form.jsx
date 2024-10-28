import React, { useState } from 'react';
import visa from "./images/visa.jpg";
import mastercard from "./images/mastercard.jpg";
import paypal from "./images/paypal.png";
import "./credit-card-form.css";

export const Credit = () => {
    const [cardNumbeer, setCardNumber] = useState('');
    const [cardNumberError, setCardNumberError] = useState('');
    const [fullName, setFullName] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [cvv, setcvv] = useState('');
    const [cvvError, setCvvError] = useState('');
    const [expiry, setexpiry] = useState('');
    const [expiryError, setexpiryError] = useState('');
    const [checkbox, setcheckbox] = useState(false);

    const handleCardNumber = (event) => {
        let value = event.target.value.replace(/\s+/g, '');
        if (value !== '' && (!(/^\d+$/).test(value))) {
            setCardNumberError("Card number must be only digits");
        } else {
            setCardNumberError('');
            if (value.length > 16) {
                setCardNumberError('Card must have only 16 digits');

            }
            else {
                setCardNumberError('');
                if (value.length < 16) {
                    setCardNumberError("the Card number must be 16 digits")
                }
                let formatedvalue = value.replace(/(\d{4})(?=\d)/g, '$1 ')

                setCardNumber(formatedvalue);
            }

        }
    }
    const handleFullName = (event) => {

        let value = event.target.value;
        if (value !== '' && !/^[A-Za-z\s]+$/.test(value)) {
            setFullNameError("Full Name must containe only Alphabts")

        } else {
            setFullNameError('')
            if (!/\s/g.test(value)) {
                setFullNameError("the Full name must be two words")

            }
            setFullNameError('')
            setFullName(value);
        }
    }
    const handlecvv = (event) => {
        let value = event.target.value;
        if (value !== '' && !/\d+/g.test(value)) {
            setCvvError("Cvv must containe only digits")
        } else {
            if (value.length > 3) {
                setCvvError("Cvv must be only 3 digits")


            } else {
                setCvvError('')
                if (value.length < 3) {
                    setCvvError("cvv must be 3 digits")

                }
                setCvvError('')
                setcvv(value);
            }
        }
    }
    const handleexpirydate = (event) => {
        let value = event.target.value;
        if (!/^(0[1-9]|1[1-2])\/\d{2}$/.test(value)) {
            setexpiryError("Expiry date must in MM/YY formate")
            setexpiry(value)
        } else {
            setexpiryError('')
            setexpiry(value)
        }

    }
    const handlecheckbox = (event) => {

        setcheckbox(event.target.checked);

    }
    const handlecheckout = () => {
        if (cardNumberError || fullNameError || expiryError || cvvError) {
            alert("correctly fill out the above details")

        } else {
            if (checkbox === false) {
                alert("check the checkbox")
            } else {


                alert("Checkout will successfully completed")
            }
        }
    }
    return (
        <form>
            <div className='container'>
                <div className='phone'>
                    <div className='header'>
                        <span>←</span>
                        <span className='icon' title='Help?'>?</span>
                    </div>
                    <h2>You're almost done!</h2>
                    <p>Provide your credit card information to complete your purchase</p>
                    <p>Payment method</p>
                    <div className='images'>
                        <img src={visa} alt="visa card" />
                        <img src={mastercard} alt='mastercard' />
                        <img src={paypal} alt='paypal' />
                    </div>
                    <div className='inputs'>
                        <label>Card Number</label>
                        <input
                            placeholder='1111 2222 3333 4444'
                            onChange={handleCardNumber}
                            value={cardNumbeer}
                        />
                        {cardNumberError && <div className='error-msg'>{cardNumberError}</div>}
                    </div>
                    <div className='inputs'>
                        <label>Cardholder's name</label>
                        <input
                            placeholder='Full Name'
                            onChange={handleFullName}
                            value={fullName}
                        />
                        {fullNameError && <div className='error-msg'>{fullNameError}</div>}

                    </div>
                    <div className='side'>
                        <div className='inputs'>
                            <label>Expiry date</label>
                            <input
                                placeholder='MM/YY'
                                onChange={handleexpirydate}
                                value={expiry}
                            />
                            {expiryError && <div className='error-msg'>{expiryError}</div>}
                        </div>
                        <div className='inputs'>
                            <label>CVV</label>
                            <input
                                placeholder='123'
                                onChange={handlecvv}
                                value={cvv}
                            />
                            {cvvError && <div className='error-msg'>{cvvError}</div>}
                        </div>
                    </div>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            onChange={handlecheckbox}
                            checked={checkbox}

                        />

                        <label className='label'>Save information for future payments</label>
                    </div>
                    <button type="submit" onClick={handlecheckout}>Checkout</button>
                </div>
            </div>
        </form>
    );
};
