import React, { useRef } from 'react';
import './CreditCardPage.styles.scss';
import InputField from '../components/InputField/InputField.component';

function CreditCardPage() {
    const field1 = useRef(0);
    const field2 = useRef(0);
    const field3 = useRef(0);
    const field4 = useRef(0);

    const handleFocus = (e) => {
        if(e.target.value.length >= 4) {
            switch(e.target.name) {
                case 'field1':
                    field2.current.focus();
                    break;
                case 'field2':
                    field3.current.focus();
                    break;
                case 'field3':
                    field4.current.focus();
                    break;
                default:
                    return;
            }
        }
    }

    const handleDelete = (e) => {
        if(e.target.value.length <= 0 && e.keyCode === 8) {
            switch(e.target.name) {
                case 'field2':
                    field1.current.focus();
                    break;
                case 'field3':
                    field2.current.focus();
                    break;
                case 'field4':
                    field3.current.focus();
                    break;
                default:
                    return;
            }
        }
    }

    const handlePaste = (e) => {
        var data = e.clipboardData.getData('Text');
        e.target.value = data.substr(0, 4);
        data = data.substr(4);
        var arr =['', '', ''];
        var i = 0;
        while(data !== '' && i < 3) {
            arr[i] = data.substr(0, 4);
            data = data.substr(4);
            i++;
        }
        field2.current.value = arr[0];
        field3.current.value = arr[1];
        field4.current.value = arr[2];
        field4.current.focus();
    }

    return (
        <div className='credit-card-page'>
            <p className='label'>Card Holder Name</p>
            <InputField
                name={"card-holder-name"}
                type={"text"}
                isNameInputField
            />
            <p className='label'>Credit Card Number*</p>
            <div className='input-boxes-container'>
                <InputField
                    ref={field1}
                    name={"field1"}
                    type={"number"}
                    maxLength={"4"}
                    handleFocus={handleFocus}
                    handlePaste={handlePaste}
                />
                <InputField
                    ref={field2}
                    type={"number"}
                    name={"field2"}
                    maxLength={"4"}
                    handleFocus={handleFocus}
                    handleDelete={handleDelete}
                />
                <InputField
                    ref={field3}
                    type={"number"}
                    name={"field3"}
                    maxLength={"4"}
                    handleFocus={handleFocus}
                    handleDelete={handleDelete}
                />
                <InputField
                    ref={field4}
                    type={"number"}
                    name={"field4"}
                    maxLength={"4"}
                    handleDelete={handleDelete}
                />
            </div>
            <div className='expiry-cvv-container'>
                <p className='label'>Expiry*</p>
                <InputField
                    name={"expiry"}
                    type={"text"}
                    placeholder={"MM/YY"}
                    maxLength={"5"}
                    isExpiryCVV
                />
                <p className='label'>CVV*</p>
                <InputField
                    name={"cvv"}
                    type={"password"}
                    maxLength={"3"}
                    isExpiryCVV
                />
            </div>
            <button className='pay-now'>Pay Now</button>
        </div>
    );
}

export default CreditCardPage;