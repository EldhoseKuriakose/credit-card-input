import React from 'react';
import './InputField.styles.scss';

const InputField = React.forwardRef((props, ref) => (
    <div className='input-container'>
        <input
            name={props.name}
            className={`${props.isNameInputField ? 'name-input' : ''} ${props.isExpiryCVV ? 'expiry-cvv-input' : ''} input-field`}
            type='text'
            maxLength={props.maxLength}
            ref={ref}
            placeholder={props.placeholder}
            onKeyUp={props.handleFocus}
            onKeyDown={props.handleDelete}
            onPaste={props.handlePaste}
        />
    </div>
));

export default InputField;